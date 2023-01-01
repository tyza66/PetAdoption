/*
 Navicat MySQL Data Transfer

 Source Server         : MYSQL
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : animalcatch

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 01/01/2023 15:28:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `perminssion` int(255) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'tyza66', 'tyza66', 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
INSERT INTO `admin` VALUES (2, 'll', 'll', 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);

-- ----------------------------
-- Table structure for adoptionrequest
-- ----------------------------
DROP TABLE IF EXISTS `adoptionrequest`;
CREATE TABLE `adoptionrequest`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `aid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `home` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tiaojian` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `other` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `statu` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of adoptionrequest
-- ----------------------------
INSERT INTO `adoptionrequest` VALUES (1, '1', '明明', '123456', '鞍山市', '猫粮10吨', '给我养，明天去xxx取', 1);
INSERT INTO `adoptionrequest` VALUES (2, '2', '亮亮', '654321', '葫芦岛市', '狗粮10吨', '养猫', 1);
INSERT INTO `adoptionrequest` VALUES (3, '1', '2', '3', '4', '5', '6', 1);
INSERT INTO `adoptionrequest` VALUES (8, '1', '2', '3', '4', '5', '5', 2);
INSERT INTO `adoptionrequest` VALUES (9, '11', '11', '11', '11', '11', '11', 1);
INSERT INTO `adoptionrequest` VALUES (10, '', '', '', '', '', '', 1);
INSERT INTO `adoptionrequest` VALUES (11, '', '', '', '', '', '', 1);
INSERT INTO `adoptionrequest` VALUES (12, 'thdht\'', 'fafef', 'casf', 'asdvgv', 'dsgvs', '获得丰厚', 0);

-- ----------------------------
-- Table structure for pets
-- ----------------------------
DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `jieshao` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `touxiang` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `statu` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pets
-- ----------------------------
INSERT INTO `pets` VALUES (3, '大明2', '捡的2', 'https://paimgcdn.baidu.com/7A6F494110E0566D?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F7717152062.jpg&rz=urar_2_968_600&v=0', 1);
INSERT INTO `pets` VALUES (4, '大花', '捡的小狗', 'https://img2.baidu.com/it/u=1965953817,2529287282&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=749', 1);
INSERT INTO `pets` VALUES (5, '花花', '山里来的小猫', 'https://img1.baidu.com/it/u=3009521590,4198747271&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1672592400&t=ea18caf906bcd3c2b511a6bc2e0ecb5d', 1);
INSERT INTO `pets` VALUES (6, '飞机', '捡来的小猫', 'https://img0.baidu.com/it/u=3950547889,2516840759&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672592400&t=ef46ec17b4a5e1cc47a8107a7559d353', 1);
INSERT INTO `pets` VALUES (7, '7', '8', '9', 2);
INSERT INTO `pets` VALUES (8, '', '3', '4', 2);
INSERT INTO `pets` VALUES (9, '111', '111', '5', 2);
INSERT INTO `pets` VALUES (10, 'ewe', 'erw', 'http://localhost:8080/uploadFile/2023/01/01/676c38e2-c8ae-4b3c-ad85-6b8a83cd9c3f.jpg', 1);
INSERT INTO `pets` VALUES (11, 'htth', 'hgtgh', 'http://localhost:8080/uploadFile/2023/01/01/d5b7928c-e42b-4594-8f69-a374972d0561.jpg', 2);
INSERT INTO `pets` VALUES (12, '狗子', '666', 'http://localhost:8080/uploadFile/2023/01/01/cd03621b-e683-4cb8-9bd3-71b4cbfe88b0.jpg', 1);
INSERT INTO `pets` VALUES (13, 'dfhd', 'fsgs\'', 'http://localhost:8080/uploadFile/2023/01/01/2308275e-6e4e-4d19-87f1-7a9cbbbd530f.jpg', 0);

-- ----------------------------
-- Table structure for swiper
-- ----------------------------
DROP TABLE IF EXISTS `swiper`;
CREATE TABLE `swiper`  (
  `id` int NOT NULL,
  `images` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of swiper
-- ----------------------------
INSERT INTO `swiper` VALUES (0, 'https://img0.baidu.com/it/u=1705694933,4002952892&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=be04db076391811bcbde9197a35e7cb8');
INSERT INTO `swiper` VALUES (1, 'https://img0.baidu.com/it/u=3156137851,1307209439&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=e87c154f994b4bf5382e2b53707783a0');
INSERT INTO `swiper` VALUES (2, 'https://img2.baidu.com/it/u=1395980100,2999837177&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1672419600&t=c0994f9a75d52eddaa346c3d57e3cb9c');

SET FOREIGN_KEY_CHECKS = 1;
