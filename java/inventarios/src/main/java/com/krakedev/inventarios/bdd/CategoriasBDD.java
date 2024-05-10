package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class CategoriasBDD {
	public void insertar(Categorias categoria) throws KrakeDevException {
		Connection con = null;
		ResultSet rsClave=null;
		int codigoCabecera=0;
		try {
			con=ConexionBDD.obtenerConexion();
			PreparedStatement ps = con.prepareStatement("insert into categorias(nombre,categoria_padre) "
					+ "values (?,?)",Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, categoria.getNombre());
			
			if(categoria.getCategoriaPadre()!=null) {
			ps.setInt(2, categoria.getCategoriaPadre().getCogidoCat());	
			}else {
			ps.setString(2, null);	
			}
			
			ps.executeUpdate();
			
			rsClave=ps.getGeneratedKeys();
			if(rsClave.next()) {
				codigoCabecera=rsClave.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar el producto. Detalle:"+e.getMessage());
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
	
	public void actualizar(Categorias categoria) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps=null;

		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("update categorias set nombre=?, categoria_padre=? where codigo_cat=?");
			ps.setString(1, categoria.getNombre());
			ps.setInt(2, categoria.getCategoriaPadre().getCogidoCat());
			ps.setInt(3, categoria.getCogidoCat());
			
			ps.executeUpdate();
			
			
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
	
	public Categorias obtenerCategoriaPorCodigo(int codigo) throws KrakeDevException {
	    Connection con = null;
	    PreparedStatement ps = null;
	    ResultSet rs = null;
	    Categorias categoria = null;

	    try {
	        con = ConexionBDD.obtenerConexion();
	        ps = con.prepareStatement("SELECT * FROM categorias WHERE codigo_cat = ?");
	        ps.setInt(1, codigo);
	        rs = ps.executeQuery();

	        if (rs.next()) {
	            int codigoCategoria = rs.getInt("codigo_cat");
	            String nombreCategoria = rs.getString("nombre");
	            int codigoCategoriaPadre = rs.getInt("categoria_padre");

	            // Si la categoría tiene un código de categoría padre válido, obtener la categoría padre
	            Categorias categoriaPadre = null;
	            if (codigoCategoriaPadre != 0) {
	                categoriaPadre = obtenerCategoriaPorCodigo(codigoCategoriaPadre);
	            }

	            // Crear el objeto Categorias con la información recuperada de la base de datos
	            categoria = new Categorias(codigoCategoria, nombreCategoria, categoriaPadre);
	        }
	    } catch (SQLException e) {
	        e.printStackTrace();
	        throw new KrakeDevException("Error al obtener la categoría por código. Detalle: " + e.getMessage());
	    } finally {
	        if (rs != null) {
	            try {
	                rs.close();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	        if (ps != null) {
	            try {
	                ps.close();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	        if (con != null) {
	            try {
	                con.close();
	            } catch (SQLException e) {
	                e.printStackTrace();
	            }
	        }
	    }

	    return categoria;
	}
	
	public ArrayList<Categorias> recuperarTodos() throws KrakeDevException{
		ArrayList<Categorias> categorias=new ArrayList<Categorias>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Categorias cat=null;
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select * from categorias");
			rs=ps.executeQuery();
			
			while(rs.next()) {
				int codigo=rs.getInt("codigo_cat");
				String nombre=rs.getString("nombre");
				int categoriaPadre=rs.getInt("categoria_padre");
				
				Categorias categoriaPadre1 = null;
	            if (categoriaPadre != 0) {
	                categoriaPadre1 = obtenerCategoriaPorCodigo(categoriaPadre); // Método para obtener la categoría padre por su código
	            }
				
				cat=new Categorias(codigo,nombre,categoriaPadre1);
				categorias.add(cat);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle:"+e.getMessage());
		}
		
		return categorias;
	}
	
}
