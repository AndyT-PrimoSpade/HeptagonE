-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: heptagon
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `furniture`
--

DROP TABLE IF EXISTS `furniture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `furniture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(45) NOT NULL,
  `length` int NOT NULL,
  `width` int NOT NULL,
  `height` int NOT NULL,
  `price` double(10,2) NOT NULL,
  `imageUrl` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `furniture`
--

LOCK TABLES `furniture` WRITE;
/*!40000 ALTER TABLE `furniture` DISABLE KEYS */;
INSERT INTO `furniture` VALUES (1,'TOBY Table','Angular coffee table duo with marble top','Table',75,50,50,350.00,'productimages/images/angularcoffeetable.jpg'),(2,'ABBY Table','Bench style dinner table set','Table',800,70,150,950.00,'productimages/images/benchdinnertable.jpg'),(3,'GINNY Table','Corner side table perfect for corners in the room. The unique style makes the atmosphere feels open.','Table',50,50,50,265.00,'productimages/images/cornersidetable.jpg'),(4,'PABLO Lounge','A centerpiece worthy of a stylish individual looking to showcase their personality. Its length is flexible and can be adjusted to fit your space. ','Chair',5000,50,2000,5000.00,'productimages/images/curveloungebench.jpg'),(5,'PENNY Table','Dinner table perfect for a household of 5. Comes with 5 chairs.','Table',1500,2000,600,2000.00,'productimages/images/dinnertable.jpg'),(6,'MOLLY Cabinet','Cabinet suited for displaying trinkets and memorabilia.','Cabinet',1500,40,2300,1500.00,'productimages/images/displaycabinet.jpg'),(7,'SUNSHINE Dresser','Dresser with 6 drawers. Comes with soft-closing hinges. Perfect for understated themes.','Dresser',1000,60,600,800.00,'productimages/images/dresser.jpg'),(8,'KITHK Cabinet','Gorgeous cabinet with a see-through black gated section. Perfect for showcasing fine china and wine glassess in the kitchen.','Cabinet',1500,60,2500,4000.00,'productimages/images/kitchencabinet.jpg'),(9,'HUE Console','Mounted TV Console that fits perfectly to light coloured walls. Minimalistic and understated.','Console',1500,30,800,800.00,'productimages/images/mountedtvconsole.jpg'),(10,'TUNE Console','TV Console with character.','Console',1300,50,600,600.00,'productimages/images/multicolouredTVconsole.jpg'),(11,'BEAD Cabinet','A showstopper display cabinet. ','Cabinet',2000,40,2500,3000.00,'productimages/images/opendisplaycabinet.jpg'),(12,'FLUFF Table','A simple square side table.','Table',50,50,50,250.00,'productimages/images/sidetable.jpg'),(13,'TOIL Chair','A simple chair perfect for the dinner table. Comes in set of 2. ','Chair',40,40,100,200.00,'productimages/images/simplechair.jpg'),(14,'FAITH Table','Solo Table Set for wall facing. Use as a study table for guest rooms. Comes with matching chair.','Table',40,40,100,200.00,'productimages/images/solotableset.jpg'),(15,'NUTTY Dresser','Gorgeous stained dresser with 6 drawers. ','Dresser',1000,60,600,900.00,'productimages/images/staineddresser.jpg'),(16,'NUTTY Console','Gorgeous stained dresser with 6 drawers. ','Console',1000,60,600,1000.00,'productimages/images/stainedTVconsole.jpg'),(17,'RAIL Cabinet','Display Cabinet made for maple wood. Oozes calm and zen.','Cabinet',90,65,1300,1250.00,'productimages/images/toiletriesdisplaycabinet.jpg'),(18,'ROLLY Console','Cedar Wood TV Console. May be used as display side cabinet as well.','Console',800,45,100,1300.00,'productimages/images/tvconsole.jpg');
/*!40000 ALTER TABLE `furniture` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-16  1:37:44
