package com.krakedev.entidades;

public class Cliente {
	private String cedula;
	private String nombre;
	private int numero_hijos;
	
	public Cliente() {}
	
	public Cliente(String cedula, String nombre) {
		super();
		this.cedula = cedula;
		this.nombre = nombre;
	}
	
	public Cliente(String cedula, String nombre, int numero_hijos) {
		super();
		this.cedula = cedula;
		this.nombre = nombre;
		this.numero_hijos = numero_hijos;
	}

	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "Cliente [cedula=" + cedula + ", nombre=" + nombre + "]";
	}

	public int getNumero_hijos() {
		return numero_hijos;
	}

	public void setNumero_hijos(int numero_hijos) {
		this.numero_hijos = numero_hijos;
	}
	
}
