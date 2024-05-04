package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class Producto {
	private int codigo;
	private String nombre;
	private UnidadDeMedida UDM;
	private BigDecimal precioVenta;
	private boolean tineIVA;
	private BigDecimal coste;
	private Categorias categoria;
	private int stock;
	public Producto() {
		super();
	}
	public Producto(int codigo, String nombre, UnidadDeMedida uDM, BigDecimal precioVenta, boolean tineIVA,
			BigDecimal coste, Categorias categoria, int stock) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
		UDM = uDM;
		this.precioVenta = precioVenta;
		this.tineIVA = tineIVA;
		this.coste = coste;
		this.categoria = categoria;
		this.stock = stock;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public UnidadDeMedida getUDM() {
		return UDM;
	}
	public void setUDM(UnidadDeMedida uDM) {
		UDM = uDM;
	}
	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}
	public boolean isTineIVA() {
		return tineIVA;
	}
	public void setTineIVA(boolean tineIVA) {
		this.tineIVA = tineIVA;
	}
	public BigDecimal getCoste() {
		return coste;
	}
	public void setCoste(BigDecimal coste) {
		this.coste = coste;
	}
	public Categorias getCategoria() {
		return categoria;
	}
	public void setCategoria(Categorias categoria) {
		this.categoria = categoria;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	@Override
	public String toString() {
		return "Producto [codigo=" + codigo + ", nombre=" + nombre + ", UDM=" + UDM + ", precioVenta=" + precioVenta
				+ ", tineIVA=" + tineIVA + ", coste=" + coste + ", categoria=" + categoria + ", stock=" + stock + "]";
	}
	
}
