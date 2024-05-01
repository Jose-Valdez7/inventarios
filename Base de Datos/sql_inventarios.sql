drop table if exists detalle_ventas;
drop table if exists cabecera_ventas;
drop table if exists detalle_pedido;
drop table if exists historial_stock;
drop table if exists productos;
drop table if exists categorias;
drop table if exists cabecera_pedido;
drop table if exists estado_pedidos; 
drop table if exists proveedores;
drop table if exists tipo_documentos;
drop table if exists unidades_medida;
drop table if exists categorias_unidad_medida;

create table categorias (
	codigo_cat serial not null,
	nombre varchar(100) not null,
	categoria_padre int,
	constraint categorias_pk primary key(codigo_cat),
	constraint categorias_fk foreign key(categoria_padre)
	references categorias(codigo_cat)
);
insert into categorias(nombre,categoria_padre)
values('Materia Prima',null);
insert into categorias(nombre,categoria_padre)
values('Proteina',1);
insert into categorias(nombre,categoria_padre)
values('Salsas',1);
insert into categorias(nombre,categoria_padre)
values('Punto de  Venta',null);
insert into categorias(nombre,categoria_padre)
values('Bebidas',4);
insert into categorias(nombre,categoria_padre)
values('Con Alcohol',5);
insert into categorias(nombre,categoria_padre)
values('Sin Alcohol',5);

create table categorias_unidad_medida(
	codigo_udm char(1) not null,
	nombre varchar(100) not null,
	constraint categorias_unidad_medida_pk primary key(codigo_udm)
);
insert into categorias_unidad_medida(codigo_udm,nombre)
values('U','Unidades');
insert into categorias_unidad_medida(codigo_udm,nombre)
values('V','Volumen');
insert into categorias_unidad_medida(codigo_udm,nombre)
values('P','Peso');

create table unidades_medida(
	codigo_udm char(1) not null,
	nombre varchar(20) not null,
	descripcion varchar(100) not null,
	categoria_udm char(1) not null,
	constraint unidades_medida_pk primary key (codigo_udm),
	constraint categorias_unidades_medida_fk foreign key (categoria_udm)
	references categorias_unidad_medida(codigo_udm)
);
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('1','ml','mililitros','V');
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('2','l','litros','V');
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('3','u','unidad','U');
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('4','d','docenas','U');
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('5','g','gramos','P');
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('6','kg','kilogramos','P');
insert into unidades_medida(codigo_udm,nombre,descripcion,categoria_udm)
values('7','lb','libras','P');

create table productos(
	codigo serial not null,
	nombre varchar(100) not null,
	UDM char(1) not null,
	precio_de_venta money not null,
	tiene_IVA boolean not null,
	coste money not null,
	categoria int not null,
	stock int not null,
	constraint productos_pk primary key(codigo),
	constraint unidades_medida_fk foreign key(UDM)
	references unidades_medida(codigo_udm),
	constraint categorias_fk foreign key(categoria)
	references categorias(codigo_cat)
);
insert into productos(nombre,UDM,precio_de_venta,tiene_IVA,coste,categoria,stock)
values('Coca cola pequena','3',0.5804,'true',0.3729,7,105);
insert into productos(nombre,UDM,precio_de_venta,tiene_IVA,coste,categoria,stock)
values('Salsa de tomate','6',0.95,'true',0.8736,7,0);
insert into productos(nombre,UDM,precio_de_venta,tiene_IVA,coste,categoria,stock)
values('Mostaza','6',0.95,'true',0.89,7,0);
insert into productos(nombre,UDM,precio_de_venta,tiene_IVA,coste,categoria,stock)
values('Fuze Tea','3',0.8,'true',0.7,3,49);

create table tipo_documentos(
	codigo char(1) not null,
	descripcion varchar(100) not null,
	constraint tipo_documentos_pk primary key(codigo)
);
insert into tipo_documentos(codigo,descripcion)
values('C','CEDULA');
insert into tipo_documentos(codigo,descripcion)
values('R','RUC');

create table proveedores(
	identificador varchar(13) not null,
	tipo_documento char(1) not null,
	nombre varchar(50) not null,
	telefono char(10) not null,
	correo varchar(100) not null,
	direccion varchar(150) not null,
	constraint proveedores_pk primary key(identificador),
	constraint tipo_documentos_fk foreign key(tipo_documento)
	references tipo_documentos(codigo)
);
insert into proveedores (identificador,tipo_documento,nombre,telefono,correo,direccion)
values('1792285747','C','Santiago Mosquera','0992920306','zantycb89@gmail.com','Cumbayork');
insert into proveedores (identificador,tipo_documento,nombre,telefono,correo,direccion)
values('1792285747001','R','Snacks SA','0992920398','snacks@gmail.com','La Tola');

create table estado_pedidos(
	codigo char(1) not null,
	descripcion varchar(100) not null,
	constraint estado_pedidos_pk primary key (codigo)
);
insert into estado_pedidos(codigo,descripcion)
values('S','Solicitado');
insert into estado_pedidos(codigo,descripcion)
values('R','Recibido');

create table cabecera_pedido(
	numero serial not null,
	proveedor varchar(13) not null,
	fecha timestamp not null,
	estado char(1) not null,
	constraint cabecera_pedido_pk primary key (numero),
	constraint proveedores_fk foreign key (proveedor)
	references proveedores(identificador),
	constraint estado_pedidos_fk foreign key(estado)
	references estado_pedidos(codigo)
);
insert into cabecera_pedido(proveedor,fecha,estado)
values(1792285747,'20/11/2023','R');
insert into cabecera_pedido(proveedor,fecha,estado)
values(1792285747,'20/11/2023','R');

create table detalle_pedido(
	codigo serial not null,
	cabecera_pedido int not null,
	producto int not null,
	cantidad_solicitada int not null,
	subtotal money not null,
	cantidad_recibida int not null,
	constraint detalle_pedido_pk primary key(codigo),
	constraint cabecera_pedido_fk foreign key(cabecera_pedido)
	references cabecera_pedido(numero),
	constraint productos_fk foreign key(producto)
	references productos(codigo)
);
insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)
values(1,1,100,37.29,100);
insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)
values(1,4,50,11.8,50);
insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)
values(2,1,10,3.73,10);

create table historial_stock(
	codigo serial not null,
	fecha timestamp without time zone not null,
	referencia varchar(100) not null,
	producto int not null,
	cantidad int not null,
	constraint historial_stock_pk primary key(codigo),
	constraint productos_fk foreign key (producto)
	references productos(codigo)
);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 19:59','PEDIDO 1',1,100);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 19:59','PEDIDO 1',4,50);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 20:00','PEDIDO 2',1,10);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 20:00','VENTA 1',1,-5);
insert into historial_stock(fecha,referencia,producto,cantidad)
values('20/11/2023 20:00','VENTA 1',4,1);

create table cabecera_ventas(
	codigo serial not null,
	fecha timestamp without time zone not null,
	total_sin_IVA money not null,
	IVA money not null,
	total money not null,
	constraint cabecera_ventas_pk primary key (codigo)
);
insert into cabecera_ventas(fecha,total_sin_IVA,IVA,total)
values('20/11/2023 20:00',3.26,0.39,3.65);

create table detalle_ventas(
	codigo serial not null,
	cabecera_ventas int not null,
	producto int not null,
	cantidad int not null,
	precio_venta money not null,
	subtotal money not null,
	subtotal_con_IVA money not null,
	constraint detalle_ventas_pk primary key (codigo),
	constraint productos_fk foreign key(producto)
	references productos(codigo),
	constraint cabecera_ventas_fk foreign key(cabecera_ventas)
	references cabecera_ventas(codigo)
);
insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_con_IVA)
values(1,1,5,0.58,2.9,3.25);
insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_con_IVA)
values(1,4,1,0.36,0.36,0.4);
select * from detalle_ventas
