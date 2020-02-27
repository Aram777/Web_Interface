# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: webinterfacesqldb.mysql.database.azure.com (MySQL 5.6.42.0)
# Database: webshopping
# Generation Time: 2020-02-27 20:39:37 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`category_id`, `name`, `parent_id`)
VALUES
	(1,'Cars',NULL),
	(2,'Yard and Garden',NULL),
	(3,'Construction and Renovation',NULL),
	(4,'Furniture',NULL),
	(5,'Pets',NULL),
	(6,'Clothes and shoes',NULL),
	(7,'Children\'s goods and toys',NULL),
	(8,'Leisure and hobbies',NULL),
	(9,'Electronics',NULL),
	(11,'cat3',1),
	(12,'cat4',0),
	(13,'cat5',0),
	(14,'cat5',NULL),
	(15,'cat555',NULL);

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table location
# ------------------------------------------------------------

DROP TABLE IF EXISTS `location`;

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `locationtitle` varchar(100) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;

INSERT INTO `location` (`location_id`, `locationtitle`)
VALUES
	(1,'Helsinki'),
	(2,'Tampere'),
	(3,'Oulu'),
	(4,'Turku'),
	(5,'Espoo'),
	(6,'Rovaniemi'),
	(7,'Lahti');

/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `products_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `dateofposting` datetime DEFAULT CURRENT_TIMESTAMP,
  `deliverytype` int(11) NOT NULL DEFAULT '0',
  `shopuser_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `location_id` int(11) NOT NULL,
  PRIMARY KEY (`products_id`),
  KEY `UsertoProd_idx` (`shopuser_id`),
  KEY `LoctoProd_idx` (`location_id`),
  KEY `CattoProd_idx` (`category_id`),
  CONSTRAINT `CattoProd` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `LoctoProd` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `UsertoProd` FOREIGN KEY (`shopuser_id`) REFERENCES `shopuser` (`shopuser_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`products_id`, `category_id`, `title`, `description`, `price`, `dateofposting`, `deliverytype`, `shopuser_id`, `status`, `location_id`)
VALUES
	(1,4,'Sofa','Few months old Ikean sofa',65.00,'2020-02-27 20:35:17',0,1,0,3),
	(2,5,'Cat','Soft cat',150.00,'2020-02-27 20:35:54',0,1,0,5),
	(3,1,'Nissan Car 2007','Nissan Cashkai 2009',999.99,'2020-02-27 20:36:36',0,1,0,2);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table shopuser
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shopuser`;

CREATE TABLE `shopuser` (
  `shopuser_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `showphone` bit(1) DEFAULT NULL,
  PRIMARY KEY (`shopuser_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `shopuser` WRITE;
/*!40000 ALTER TABLE `shopuser` DISABLE KEYS */;

INSERT INTO `shopuser` (`shopuser_id`, `username`, `email`, `password`, `create_time`, `address`, `phone`, `showphone`)
VALUES
	(1,'zhanna','kresteva.astana@gmail.com','12345','2020-02-27 20:34:08','Peltola','+12345',NULL),
	(2,'aram','aram.abbasi@gmail.com','123','2020-02-27 20:38:15','Kaukavanio','+12',NULL);

/*!40000 ALTER TABLE `shopuser` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
