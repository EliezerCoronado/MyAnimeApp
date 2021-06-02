-- MySQL Script generated by MySQL Workbench
-- dom 04 abr 2021 15:56:58
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MyAnime
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MyAnime
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MyAnime` ;
USE `MyAnime` ;

-- -----------------------------------------------------
-- Table `MyAnime`.`type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`type` (
  `id_type` INT NOT NULL AUTO_INCREMENT,
  `name_type` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`file` (
  `id_file` INT NOT NULL AUTO_INCREMENT,
  `name_file` VARCHAR(200) NOT NULL,
  `type_id_type` INT NOT NULL,
  PRIMARY KEY (`id_file`, `type_id_type`),
  INDEX `fk_file_type_idx` (`type_id_type` ASC) VISIBLE,
  CONSTRAINT `fk_file_type`
    FOREIGN KEY (`type_id_type`)
    REFERENCES `MyAnime`.`type` (`id_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`season`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`season` (
  `id_season` INT NOT NULL AUTO_INCREMENT,
  `name_season` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_season`))
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `MyAnime`.`file_season`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`file_season` (
  `file_id_file` INT NOT NULL,
  `season_id_season` INT NOT NULL,
  `name` VARCHAR(300) NOT NULL,
  `description` VARCHAR(2500) NOT NULL,
  `release_date` DATE NOT NULL,
  `path` VARCHAR(300) NOT NULL,
  `cover_page` VARCHAR(300) NOT NULL,
  `price` INT NOT NULL,
  `format` VARCHAR(10) NOT NULL,
  `quality` VARCHAR(10) NOT NULL,
  `trailer` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`file_id_file`, `season_id_season`),
  INDEX `fk_file_has_season_season1_idx` (`season_id_season` ASC) VISIBLE,
  INDEX `fk_file_has_season_file1_idx` (`file_id_file` ASC) VISIBLE,
  CONSTRAINT `fk_file_has_season_file1`
    FOREIGN KEY (`file_id_file`)
    REFERENCES `MyAnime`.`file` (`id_file`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_file_has_season_season1`
    FOREIGN KEY (`season_id_season`)
    REFERENCES `MyAnime`.`season` (`id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;








-- -----------------------------------------------------
-- Table `MyAnime`.`language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`language` (
  `id_language` INT NOT NULL AUTO_INCREMENT,
  `language` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_language`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `MyAnime`.`file_season_language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`file_season_language` (
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  `language_id_language` INT NOT NULL,
  PRIMARY KEY (`file_season_file_id_file`, `file_season_season_id_season`, `language_id_language`),
  INDEX `fk_file_season_has_language_language1_idx` (`language_id_language` ASC) VISIBLE,
  INDEX `fk_file_season_has_language_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_file_season_has_language_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_file_season_has_language_language1`
    FOREIGN KEY (`language_id_language`)
    REFERENCES `MyAnime`.`language` (`id_language`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `MyAnime`.`subtitle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`subtitle` (
  `id_subtitle` INT NOT NULL AUTO_INCREMENT,
  `subtitle` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_subtitle`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `MyAnime`.`file_season_language`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`file_season_subtitle` (
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  `subtitle_id_subtitle` INT NOT NULL,
  PRIMARY KEY (`file_season_file_id_file`, `file_season_season_id_season`, `subtitle_id_subtitle`),
  INDEX `fk_file_season_has_subtitle_subtitle1_idx` (`subtitle_id_subtitle` ASC) VISIBLE,
  INDEX `fk_file_season_has_subtitle_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_file_season_has_subtitle_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_file_season_has_subtitle_subtitle1`
    FOREIGN KEY (`subtitle_id_subtitle`)
    REFERENCES `MyAnime`.`subtitle` (`id_subtitle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;









-- -----------------------------------------------------
-- Table `MyAnime`.`fisical_file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`fisical_file` (
  `id_file` INT NOT NULL AUTO_INCREMENT,
  `name_fisical_file` VARCHAR(150) NOT NULL,
  `size_fisical_file` INT NOT NULL,
  `duration` INT NOT NULL,
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  PRIMARY KEY (`id_file`, `file_season_file_id_file`, `file_season_season_id_season`),
  INDEX `fk_fisical_file_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_fisical_file_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`category` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name_category` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_category`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`category_file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`category_file` (
  `category_id_category` INT NOT NULL,
  `file_id_serie` INT NOT NULL,
  PRIMARY KEY (`category_id_category`, `file_id_serie`),
  INDEX `fk_category_has_file_file1_idx` (`file_id_serie` ASC) VISIBLE,
  INDEX `fk_category_has_file_category1_idx` (`category_id_category` ASC) VISIBLE,
  CONSTRAINT `fk_category_has_file_category1`
    FOREIGN KEY (`category_id_category`)
    REFERENCES `MyAnime`.`category` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_has_file_file1`
    FOREIGN KEY (`file_id_serie`)
    REFERENCES `MyAnime`.`file` (`id_file`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`picture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`picture` (
  `id_picture` INT NOT NULL AUTO_INCREMENT,
  `path_picture` VARCHAR(300) NOT NULL,
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  PRIMARY KEY (`id_picture`, `file_season_file_id_file`, `file_season_season_id_season`),
  INDEX `fk_picture_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_picture_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`tag` (
  `id_tag` INT NOT NULL AUTO_INCREMENT,
  `name_tag` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_tag`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`file_season_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`file_season_tag` (
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  `tag_id_tag` INT NOT NULL,
  PRIMARY KEY (`file_season_file_id_file`, `file_season_season_id_season`, `tag_id_tag`),
  INDEX `fk_file_season_has_tag_tag1_idx` (`tag_id_tag` ASC) VISIBLE,
  INDEX `fk_file_season_has_tag_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_file_season_has_tag_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_file_season_has_tag_tag1`
    FOREIGN KEY (`tag_id_tag`)
    REFERENCES `MyAnime`.`tag` (`id_tag`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`actor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`actor` (
  `id_actor` INT NOT NULL AUTO_INCREMENT,
  `name_actor` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id_actor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`file_season_actor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`file_season_actor` (
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  `actor_id_actor` INT NOT NULL,
  PRIMARY KEY (`file_season_file_id_file`, `file_season_season_id_season`, `actor_id_actor`),
  INDEX `fk_file_season_has_actor_actor1_idx` (`actor_id_actor` ASC) VISIBLE,
  INDEX `fk_file_season_has_actor_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_file_season_has_actor_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_file_season_has_actor_actor1`
    FOREIGN KEY (`actor_id_actor`)
    REFERENCES `MyAnime`.`actor` (`id_actor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MyAnime`.`second_name`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MyAnime`.`second_name` (
  `id_second_name` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  `second_names` VARCHAR(300) NOT NULL,
  `file_season_file_id_file` INT NOT NULL,
  `file_season_season_id_season` INT NOT NULL,
  PRIMARY KEY (`id_second_name`, `file_season_file_id_file`, `file_season_season_id_season`),
  INDEX `fk_second_name_file_season1_idx` (`file_season_file_id_file` ASC, `file_season_season_id_season` ASC) VISIBLE,
  CONSTRAINT `fk_second_name_file_season1`
    FOREIGN KEY (`file_season_file_id_file` , `file_season_season_id_season`)
    REFERENCES `MyAnime`.`file_season` (`file_id_file` , `season_id_season`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;