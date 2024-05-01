package com.krakedev.persistencia;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.entidades.Cliente;
import com.krakedev.exception.KrakeDevException;
import com.krakedev.utils.ConexionBDD;

public class ClientesBDD {
	public void insertar(Cliente cliente) throws KrakeDevException {
		Connection con = null;
		try {
			con=ConexionBDD.obtenerConexion();
			PreparedStatement ps = con.prepareStatement("insert into clientes(cedula,nombre,numeroHijos) "
					+ "values (?,?,?)");
			ps.setString(1, cliente.getCedula());
			ps.setString(2, cliente.getNombre());
			ps.setInt(3, cliente.getNumero_hijos());
			
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar el cliente. Detalle:"+e.getMessage());
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
	
	public void actualizar(Cliente cliente) throws KrakeDevException {
		Connection con=null;
		try {
			con=ConexionBDD.obtenerConexion();
			PreparedStatement ps=con.prepareStatement("update clientes set nombre=?, numeroHijos=? where cedula=?");
			ps.setString(1, cliente.getNombre());
			ps.setInt(2, cliente.getNumero_hijos());
			ps.setString(3, cliente.getCedula());
			
			ps.executeUpdate();
			
		} catch (KrakeDevException e) {
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al actualizar cliente. Detalle"+e.getMessage());
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
	
	public ArrayList<Cliente> recuperarTodos() throws KrakeDevException{
		ArrayList<Cliente> clientes=new ArrayList<Cliente>();
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Cliente cliente=null;
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select cedula,nombre,numeroHijos from clientes");
			rs=ps.executeQuery();
			
			while(rs.next()) {
				String cedula=rs.getString("cedula");
				String nombre=rs.getString("nombre");
				int numeroHijos=rs.getInt("numeroHijos"); 
				cliente=new Cliente(cedula,nombre,numeroHijos);
				clientes.add(cliente);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle:"+e.getMessage());
		}
		
		return clientes;
	}
	
	public Cliente buscarPorPK(String cedulaBusqueda) throws KrakeDevException{
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Cliente cliente=null;
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select cedula,nombre,numeroHijos from clientes where cedula=?");
			ps.setString(1, cedulaBusqueda);
			rs=ps.executeQuery();
			
			if(rs.next()) {
				System.out.println("Existe el Cliente");
				String cedula=rs.getString("cedula");
				String nombre=rs.getString("nombre");
				int numeroHijos=rs.getInt("numeroHijos"); 
				cliente=new Cliente(cedula,nombre,numeroHijos);
			}else {
				System.out.println("No Existe el cliente");
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle:"+e.getMessage());
		}
		
		return cliente;
	}
	
	public Cliente buscarPorNumeroHijos(int numeroHijosBusqueda) throws KrakeDevException{
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Cliente cliente=null;
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select cedula,nombre,numeroHijos from clientes where numeroHijos=?");
			ps.setInt(1, numeroHijosBusqueda);
			rs=ps.executeQuery();
			
			if(rs.next()) {
				System.out.println("Existe el Cliente");
				String cedula=rs.getString("cedula");
				String nombre=rs.getString("nombre");
				int numeroHijos=rs.getInt("numeroHijos"); 
				cliente=new Cliente(cedula,nombre,numeroHijos);
			}else {
				System.out.println("No Existe el cliente");
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle:"+e.getMessage());
		}
		
		return cliente;
	}
}
