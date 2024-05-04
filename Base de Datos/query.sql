Select prod.codigo,prod.nombre as nombre_producto,udm.nombre as nombre_udm, udm.descripcion as descripcion_udm,
cast(prod.precio_de_venta as decimal(6,2)),prod.tiene_iva, cast(prod.coste as decimal(5,4)),prod.categoria,
cat.nombre as nombre_categoria, prod.stock, cat.codigo_cat
from productos prod, unidades_medida udm, categorias cat
where prod.udm=udm.nombre
and prod.categoria=cat.codigo_cat
and upper (prod.nombre) like '%M%'

Select *
from productos prod, unidades_medida udm, categorias cat
where prod.udm=udm.nombre
and prod.categoria=cat.codigo_cat