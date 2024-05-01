package com.krakedev.utils;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import com.krakedev.exception.KrakeDevException;

public class ConexionBDD {
	public static Connection obtenerConexion() throws KrakeDevException {
		Context ctx = null;
		DataSource ds = null;
		Connection con = null;

		try {
			ctx = new InitialContext();
			// JNDI utiliza java para buscar elementos
			ds = (DataSource) ctx.lookup("java:/comp/env/jdbc/ConexionPG");
			con = ds.getConnection();
		}catch (SQLException | NamingException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error de Conexion");
		}
		return con;
	}	
}
