package com.krakedev.inventarios.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.VentasBDD1;
import com.krakedev.inventarios.entidades.CabeceraVentas;
import com.krakedev.inventarios.excepciones.KrakeDevException;
@Path("ventas")
public class ServiciosVentas {
	
	@Path("guardar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertar(CabeceraVentas ventas) {
		System.out.println(">>>>>"+ventas);
		VentasBDD1 venBDD=new VentasBDD1();
		try {
			venBDD.insertar(ventas);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response actualizar(CabeceraVentas ventas) {
		System.out.println(">>>>>"+ventas);
		VentasBDD1 venBDD=new VentasBDD1();
		try {
			venBDD.actualizar(ventas);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
