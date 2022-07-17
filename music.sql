-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 09, 2022 at 04:45 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_playlist`
--

CREATE TABLE `tbl_playlist` (
  `id_playlist` int(11) NOT NULL,
  `name_playlist` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_singer`
--

CREATE TABLE `tbl_singer` (
  `singer_id` int(11) NOT NULL,
  `name_singer` varchar(250) NOT NULL,
  `imgSG` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_singer`
--

INSERT INTO `tbl_singer` (`singer_id`, `name_singer`, `imgSG`) VALUES
(1, 'Đen Vâu', '../img/denvau1.jpeg'),
(2, 'Mr Siro', '[value-3]'),
(3, 'Noo Phước Thịnh', '[value-3]'),
(4, 'Hương Tràm', '[value-3]');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_song`
--

CREATE TABLE `tbl_song` (
  `id` int(11) NOT NULL,
  `singer_id` int(11) NOT NULL,
  `name_song` varchar(250) NOT NULL,
  `id_playlist` int(11) NOT NULL,
  `audio` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_song`
--

INSERT INTO `tbl_song` (`id`, `singer_id`, `name_song`, `id_playlist`, `audio`, `image`) VALUES
(1, 1, 'Anh đếch cần gì nhiều ngoài em', 1, '../aud/AnhDechCanGiNhieuNgoaiEm-DenVuThanhDong.mp3', '../img/album_img.jpeg'),
(2, 1, 'Bài này chill phết', 1, '../aud/BaiNayChillPhet-DenMIN-5978903.mp3', '../img/album_img.jpeg'),
(3, 1, 'Đi theo bóng mặt trời', 1, '../aud/Di-Theo-Bong-Mat-Troi-Tang-Ngan-Ha-Maius-Philharmonic.mp3', '../img/album_img.jpeg'),
(4, 1, 'Đi trong mùa hè', 1, '../aud/Di-Trong-Mua-He-Den-Vau-Tran-Tien.mp3', '../img/album_img.jpeg'),
(5, 1, 'Đưa nhau đi trốn', 1, '../aud/DuaNhauDiTronChillVersion-DangCapNhat-4110390.mp3', '../img/album_img.jpeg'),
(6, 1, 'Hai triệu năm', 1, '../aud/HaiTrieuNam-DenBien-6007307.mp3', '../img/album_img.jpeg'),
(7, 1, 'Ngày khác lạ', 1, '../aud/NgayKhacLa-DenDJGiangPhamTripleD-5393909.mp3', '../img/album_img.jpeg'),
(8, 1, 'Trời hôm nay nhiều mây cực', 1, '../aud/TroiHomNayNhieuMayCuc-Den-6464309.mp3', '../img/album_img.jpeg'),
(9, 2, 'Bức tranh từ nước măt', 1, '../aud/BucTranhTuNuocMat-MrSiro-2741834.mp3', '../img/album_mrsiro.jpeg'),
(10, 2, 'Đã từng vô giá', 1, '../aud/DaTungVoGia-MrSiro-4891849.mp3', '../img/album_mrsiro.jpeg'),
(11, 2, 'Gương mặt lạ lẫm', 1, '../aud/GuongMatLaLam-MrSiro-4583437.mp3', '../img/album_mrsiro.jpeg'),
(12, 2, 'Một bước yêu vạn dặm đau', 1, '../aud/Mot Buoc Yeu Van Dam Dau - Mr Siro (NhacPro.net).mp3', '../img/album_mrsiro.jpeg'),
(13, 3, 'Cause i love you', 1, '../aud/causeiloveyou.mp3', '../img/album_noo.jpeg'),
(14, 3, 'Chạm khẽ tim anh một chút thôi', 1, '../aud/chamkhetimanhmotchuthoi.mp3', '../img/album_noo.jpeg'),
(15, 3, 'Em đã thương người ta hơn anh', 1, '../aud/emdathuongnguoitahonanh.mp3', '../img/album_noo.jpeg'),
(16, 3, 'Im still loving you', 1, '../aud/imstilllovingyou.mp3', '../img/album_noo.jpeg'),
(17, 3, 'Như phút ban đầu', 1, '../aud/nhuphutbandau.mp3', '../img/album_noo.jpeg'),
(18, 3, 'Thương em là điều anh không thể ngờ', 1, '../aud/thuongemladieuanhkhongthe.mp3', '../img/album_noo.jpeg'),
(19, 3, 'Thương mấy cũng là người dưng', 1, '../aud/thuongmaycunglanguoidung.mp3', '../img/album_noo.jpeg'),
(20, 4, 'Anh, thế giời và em', 1, '../aud/anhthegioivaem.mp3', '../img/album_huongtram.jpeg'),
(21, 4, 'Cánh hoa tàn', 1, '../aud/canhhoatan.mp3', '../img/album_huongtram.jpeg'),
(22, 4, 'Cho em gần anh thêm chút nữa', 1, '../aud/choemgananhthemchutnua.mp3', '../img/album_huongtram.jpeg'),
(23, 4, 'Duyên mình lỡ', 1, '../aud/duyenminhlo.mp3', '../img/album_huongtram.jpeg'),
(24, 4, 'Em gái mưa', 1, '../aud/emgaimua.mp3', '../img/album_huongtram.jpeg'),
(25, 4, 'Người từng thương anh rất sâu đậm', 1, '../aud/nguoitungthuonganhratsaudam.mp3', '../img/album_huongtram.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `user_img` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `fullname`, `email`, `password`, `user_img`) VALUES
(1, 'Nguyễn hồng trúc lâm', 'lam@gmail.com', '123456', '../img/avt.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_playlist`
--
ALTER TABLE `tbl_playlist`
  ADD PRIMARY KEY (`id_playlist`);

--
-- Indexes for table `tbl_singer`
--
ALTER TABLE `tbl_singer`
  ADD PRIMARY KEY (`singer_id`);

--
-- Indexes for table `tbl_song`
--
ALTER TABLE `tbl_song`
  ADD PRIMARY KEY (`id`),
  ADD KEY `singer_id` (`singer_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_playlist`
--
ALTER TABLE `tbl_playlist`
  MODIFY `id_playlist` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_singer`
--
ALTER TABLE `tbl_singer`
  MODIFY `singer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_song`
--
ALTER TABLE `tbl_song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_song`
--
ALTER TABLE `tbl_song`
  ADD CONSTRAINT `tbl_song_ibfk_1` FOREIGN KEY (`singer_id`) REFERENCES `tbl_singer` (`singer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
