
drop table if exists partidosCopa;
drop table if exists pronosticos;
drop table if exists equiposParticipantes;
drop table if exists usuarios;

create table equiposParticipantes (
	ep_codigo char(3) not null,
	ep_nombre varchar(50),
	constraint equiposParticipantes_pk primary key(ep_codigo)
);
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Argentina','032');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Mexico','484');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Brasil','076');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('USA','840');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Uruguay','858');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Colombia','170');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Ecuador','218');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Peru','604');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Chile','152');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Venezuela','862');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Panama','592');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Paraguay','600');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Jamaica','388');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Bolivia','086');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Canada','124');
insert into equiposParticipantes(ep_nombre,ep_codigo)
values('Costa Rica','188');


create table partidosCopa(
	pc_codigo serial,
	pc_ep_codigo1 char(3),
	pc_ep_codigo2 char(3),
	pc_fecha timestamp,
	constraint partidosCopa_pk primary Key (pc_codigo),
	constraint equiposParticipantes_fk foreign key (pc_ep_codigo1)  
	references equiposParticipantes(ep_codigo),
	constraint equiposParticipantes2_fk foreign key (pc_ep_codigo2)  
	references equiposParticipantes(ep_codigo)
);

insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('032','124','20/06/2024 19:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('604','152','21/06/2024 19:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('218','862','22/06/2024 17:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('484','388','22/06/2024 20:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('840','086','23/06/2024 17:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('858','592','23/06/2024 20:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('170','600','24/06/2024 17:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('076','188','24/06/2024 20:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('604','124','25/06/2024 17:00');
insert into partidosCopa(pc_ep_codigo1,pc_ep_codigo2,pc_fecha)
values('152','032','25/06/2024 20:00');


create table usuarios(
	usu_codigo serial,
	usu_cedula char(10) not null,
	usu_nombre varchar(50) not null,
	usu_apellido varchar(50) not null,
	constraint usuarios_pk primary key (usu_codigo) 
);
insert into usuarios(usu_cedula,usu_nombre,usu_apellido)
values('1725489633','Jose','Valdez');
insert into usuarios(usu_cedula,usu_nombre,usu_apellido)
values('1305478125','Paola','Paucarima');
insert into usuarios(usu_cedula,usu_nombre,usu_apellido)
values('1895420347','Juan','Alcazar');

create table pronosticos(
	pro_codigo serial,
	pro_usu_codigo int,
	pro_pc_codigo int,
	pro_ep_codigo1 char(3),
	pro_ep_codigo2 char(3),
	pro_marcador1 int,
	pro_marcador2 int,
	constraint pronosticos_pk primary key (pro_codigo),
	constraint usuarios_fk foreign key(pro_usu_codigo)
	references usuarios(usu_codigo),
	constraint partidosCopa_fk foreign key(pro_pc_codigo)
	references partidosCopa(pc_codigo),
	constraint equiposParticipantes_fk foreign key (pro_ep_codigo1)  
	references equiposParticipantes(ep_codigo),
	constraint equiposParticipantes2_fk foreign key (pro_ep_codigo2)  
	references equiposParticipantes(ep_codigo)
);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(1,3,'218','862',3,1);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(1,4,'484','388',0,1);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(1,5,'840','086',3,0);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(2,3,'218','862',2,1);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(2,10,'152','032',2,2);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(2,9,'604','124',1,0);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(3,3,'218','862',1,1);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(3,8,'076','188',2,0);
insert into pronosticos(pro_usu_codigo,pro_pc_codigo,pro_ep_codigo1,pro_ep_codigo2,pro_marcador1,pro_marcador2)
values(3,1,'032','124',1,1);


select * from equiposParticipantes
select * from usuarios
select * from partidosCopa
select * from pronosticos

select * from partidosCopa
where pc_fecha between '22/06/2024 00:01' and '22/06/2024 23:59'

select * from pronosticos
where pro_usu_codigo=1

select * from pronosticos
where pro_pc_codigo=3