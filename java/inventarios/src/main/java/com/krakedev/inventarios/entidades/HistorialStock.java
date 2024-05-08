package com.krakedev.inventarios.entidades;

import java.util.Date;

public class HistorialStock {
	private Date fecha;
	private String referencia;
	private Producto codProducto;
	private int cantidad;
	public HistorialStock() {
		super();
	}
	public HistorialStock(Date fecha, String referencia, Producto codProducto, int cantidad) {
		super();
		this.fecha = fecha;
		this.referencia = referencia;
		this.codProducto = codProducto;
		this.cantidad = cantidad;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getReferencia() {
		return referencia;
	}
	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}
	public Producto getCodProducto() {
		return codProducto;
	}
	public void setCodProducto(Producto codProducto) {
		this.codProducto = codProducto;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	@Override
	public String toString() {
		return "HistorialStock [fecha=" + fecha + ", referencia=" + referencia + ", codProducto=" + codProducto
				+ ", cantidad=" + cantidad + "]";
	}
	
	
}
