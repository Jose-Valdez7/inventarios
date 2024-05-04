package com.krakedev.inventarios.entidades;

public class Categorias {
	private int cogidoCat;
	private String nombre;
	private Categorias categoriaPadre;
	
	public Categorias() {
		super();
	}

	public Categorias(int cogidoCat, String nombre, Categorias categoriaPadre) {
		super();
		this.cogidoCat = cogidoCat;
		this.nombre = nombre;
		this.categoriaPadre = categoriaPadre;
	}

	public int getCogidoCat() {
		return cogidoCat;
	}

	public void setCogidoCat(int cogidoCat) {
		this.cogidoCat = cogidoCat;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Categorias getCategoriaPadre() {
		return categoriaPadre;
	}

	public void setCategoriaPadre(Categorias categoriaPadre) {
		this.categoriaPadre = categoriaPadre;
	}

	@Override
	public String toString() {
		return "Categorias [cogidoCat=" + cogidoCat + ", nombre=" + nombre + ", categoriaPadre=" + categoriaPadre + "]";
	}
	
	
}
