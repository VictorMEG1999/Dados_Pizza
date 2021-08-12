CREATE DATABASE IF NOT EXISTS bd_pizzas;

Use  bd_pizzas ;

CREATE TABLE IF NOT EXISTS `admin` (
  `ID_Admin` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `Telefono` int NOT NULL,
  PRIMARY KEY (`ID_Admin`)
);

CREATE TABLE IF NOT EXISTS`clientes` (
  `ID_Clientes` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `Telefono` int NOT NULL,
  `Direccion` varchar(30) NOT NULL,
  PRIMARY KEY (`ID_Clientes`)
);

CREATE TABLE IF NOT EXISTS `especial` (
  `ID_Producto` int NOT NULL,
  `Cantidad` int NOT NULL,
  `Precio` double NOT NULL,
  `Presentacion` varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS `ingredientes` (
  `ID_Producto` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  PRIMARY KEY (`ID_Producto`)
);

CREATE TABLE IF NOT EXISTS `pedido` (
  `ID_Pedido` int NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `Direccion` varchar(30) NOT NULL,
  `Nombre_Cliente` varchar(30) NOT NULL,
  `Telefono_cliente` int NOT NULL,
  `Factura` varchar(30) NOT NULL,
  `Detalle_pedido` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_Pedido`)
);

CREATE TABLE IF NOT EXISTS `pizza` (
  `ID_Pizza` int NOT NULL,
  `Tamaño` varchar(10) NOT NULL,
  `Precio` double NOT NULL,
  `Tipo_pizza` varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS  `repartidor` (
  `ID_Repartidor` int NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Telefono` int NOT NULL,
  `Edad` int NOT NULL,
  PRIMARY KEY (`ID_Repartidor`)
);

CREATE TABLE IF NOT EXISTS `usuarios` (
  `ID_usuario` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(40) NOT NULL,
  `Telefono` int NOT NULL,
  PRIMARY KEY (`ID_usuario`)
);


INSERT INTO `admin` VALUES (123,'administrador',123456789);

INSERT INTO `clientes` VALUES (1,'Pedro ramos',12345,'Callebuenavista');

INSERT INTO `especial` VALUES (1234,1,120,'mediana');

INSERT INTO `ingredientes` VALUES (1,'peperoni'),(2,'champiñones'),(3,'Extra queso');

INSERT INTO `pedido` VALUES (14,'2021-07-28','14:12:00','Ixmiquilpan','Juan',123456789,'146324','1 Pizza peperoni mediana y refresco 2L');

INSERT INTO `pizza` VALUES (123,'Grande',160,'Mexicana');

INSERT INTO `repartidor` VALUES (16,'José Guadalupe',12345678,20);

INSERT INTO `usuarios` VALUES (1,'Jesus',12345678);


SELECT * FROM admin ;

SELECT * FROM clientes ;

SELECT * FROM especial ;

SELECT * FROM ingredientes ;

SELECT * FROM pedido;

SELECT * FROM pizza;

SELECT * FROM repartidor; 

SELECT * FROM usuarios ;

