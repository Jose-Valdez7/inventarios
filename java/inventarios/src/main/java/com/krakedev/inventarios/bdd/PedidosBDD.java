package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.EstadoPedido;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.TipoDocumentos;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class PedidosBDD {
	
	public void insertar(Pedido pedido) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps=null;
		PreparedStatement psDet=null;
		ResultSet rsClave=null;
		int codigoCabecera=0;
		
		Date fechaActual=new Date();
		java.sql.Date fechaSQL=new java.sql.Date(fechaActual.getTime());
		
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("insert into cabecera_pedido (proveedor,fecha,estado) "
					+ "values (?,?,?)",Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, pedido.getProveedor().getIdentificador());
			ps.setDate(2, fechaSQL);
			ps.setString(3, "S");
			
			ps.executeUpdate();
			
			rsClave=ps.getGeneratedKeys();
			if(rsClave.next()) {
				codigoCabecera=rsClave.getInt(1);
			}
			
			ArrayList<DetallePedido> detallesPedido=pedido.getDetalles();
			DetallePedido det;
			for(int i=0;i<detallesPedido.size();i++) {
				det=detallesPedido.get(i);
				psDet=con.prepareStatement("insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,cantidad_recibida,subtotal) "
						+ "values(?,?,?,?,?);");
				psDet.setInt(1, codigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigo());
				psDet.setInt(3, det.getCantidadSolicitada());
				psDet.setInt(4, 0);
				BigDecimal pv=det.getProducto().getPrecioVenta();
				BigDecimal cantidad=new BigDecimal(det.getCantidadSolicitada());
				BigDecimal subtotal=pv.multiply(cantidad);
				psDet.setBigDecimal(5, subtotal);
				
				psDet.executeUpdate();
			}
			
			System.out.println("CODIGO GENERADO>>>>"+codigoCabecera );
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar el pedido. Detalle:"+e.getMessage());
		} catch (KrakeDevException e) {
			throw e;
		}finally {
			if(con!=null) {
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			}
		}
	}
	
	public void actualizar(Pedido pedido) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps=null;
		PreparedStatement psDet=null;
		PreparedStatement psHis=null;
		
		Date fechaActual=new Date();
		Timestamp fechaHoraActual=new Timestamp(fechaActual.getTime());

		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("update cabecera_pedido set estado=? where numero=?");
			ps.setString(1, "R");
			ps.setInt(2, pedido.getCodigo());
			
			ps.executeUpdate();
			
	
			ArrayList<DetallePedido> detallesPedido=pedido.getDetalles();
			DetallePedido det = null;
			for(int i=0;i<detallesPedido.size();i++) {
				det=detallesPedido.get(i);
	
				psDet=con.prepareStatement("update detalle_pedido set cantidad_recibida=?,subtotal=? where producto=?");
			
				psDet.setInt(1, det.getCantidadRecibida());
				BigDecimal pv=det.getProducto().getPrecioVenta();
				BigDecimal cantidad=new BigDecimal(det.getCantidadRecibida());
				BigDecimal subtotal=pv.multiply(cantidad);
				psDet.setBigDecimal(2, subtotal);
				psDet.setInt(3, det.getProducto().getCodigo());
				
				psDet.executeUpdate();
			}
			
			for(int i=0;i<detallesPedido.size();i++) {
				det=detallesPedido.get(i);
				
			psHis=con.prepareStatement("insert into historial_stock (fecha, referencia, producto, cantidad) "
					+ "values (?,?,?,?)",Statement.RETURN_GENERATED_KEYS);
			psHis.setTimestamp(1, fechaHoraActual);
			psHis.setString(2, "PEDIDO "+pedido.getCodigo());
			psHis.setInt(3,det.getProducto().getCodigo());
			psHis.setInt(4,det.getCantidadRecibida());
			
			psHis.executeUpdate();
			
			ResultSet rsClave=null;
			int codigoCabecera=0;
			rsClave=psHis.getGeneratedKeys();
			if(rsClave.next()) {
				codigoCabecera=rsClave.getInt(1);
			}
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al actualizar el pedido. Detalle:"+e.getMessage());
		} catch (KrakeDevException e) {
			throw e;
		}finally {
			if(con!=null) {
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			}
		}
	}
	
	public ArrayList<Pedido> buscarPedido(String identificador) throws KrakeDevException{
		ArrayList<Pedido> pedidos=new ArrayList<Pedido>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Pedido pedido=null;
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("Select cp.numero,cp.proveedor,cp.fecha,cp.estado,ep.descripcion, "
					+ "prov.tipo_documento,prov.nombre,prov.telefono, prov.correo,prov.direccion "
					+ "from cabecera_pedido cp, proveedores prov, estado_pedidos ep "
					+ "where cp.proveedor=prov.identificador "
					+ "and cp.estado=ep.codigo "
					+ "and cp.proveedor = ?");
			ps.setString(1, identificador);
			rs=ps.executeQuery();
			
			while(rs.next()) {
				int numero=rs.getInt("numero");
				String proveedor=rs.getString("proveedor");
				Date fecha=rs.getDate("fecha");
				String estado=rs.getString("estado");
				String descripcion=rs.getString("descripcion");
				String tp=rs.getString("tipo_documento");
				String nombre=rs.getString("nombre");
				String telefono=rs.getString("telefono");
				String direccion=rs.getString("direccion");
				String correo=rs.getString("correo");
				
				TipoDocumentos td=new TipoDocumentos();
				td.setCodigo(tp);
				
				Proveedor prov=new Proveedor();
				prov.setIdentificador(proveedor);
				prov.setTipoDocumento(td);
				prov.setNombre(nombre);
				prov.setTelefono(telefono);
				prov.setCorreo(correo);
				prov.setDireccion(direccion);
				
				EstadoPedido ep=new EstadoPedido();
				ep.setCodigo(estado);
				ep.setDescripcion(descripcion);
				
				pedido=new Pedido();
				pedido.setCodigo(numero);
				pedido.setProveedor(prov);
				pedido.setFecha(fecha);
				pedido.setEstado(ep);
				
				pedidos.add(pedido);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle:"+e.getMessage());
		}
		
		return pedidos;
	}
}
