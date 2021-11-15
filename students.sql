-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 15, 2021 at 12:01 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `content`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `Name` varchar(250) DEFAULT NULL,
  `Surname` varchar(250) DEFAULT NULL,
  `Year` tinyint(4) DEFAULT NULL,
  `Course_1` float DEFAULT NULL,
  `Course_2` float DEFAULT NULL,
  `Course_3` float DEFAULT NULL,
  `Course_4` float DEFAULT NULL,
  `Course_5` float DEFAULT NULL,
  `Course_6` float DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `Name`, `Surname`, `Year`, `Course_1`, `Course_2`, `Course_3`, `Course_4`, `Course_5`, `Course_6`, `createdAt`, `updatedAt`) VALUES
(5, 'Nancy ', 'Berry', 1, 4.6, 6.6, 4.3, 7.2, 8.4, 5.2, '2021-11-11 12:51:38', '2021-11-15 08:03:05'),
(6, 'Sheila ', 'Boyd', 3, 7.44, 8.33, 9.56, 7.12, 7.21, 8.01, '2021-11-11 12:52:30', '2021-11-15 08:09:23'),
(7, 'Lisa ', 'Warren', 2, 3.12, 4.02, 8.22, 4.33, 7.22, 6.65, '2021-11-11 12:54:02', '2021-11-11 12:54:02'),
(9, 'Jesse', 'Hardin', 4, 2.12, 4.21, 5.12, 2.21, 6.22, 7.21, '2021-11-11 13:44:36', '2021-11-13 21:41:02'),
(10, 'Eddie ', 'Hale', 4, 8.66, 9.2, 8.5, 7.91, 8.22, 7.55, '2021-11-12 21:45:05', '2021-11-12 21:45:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
