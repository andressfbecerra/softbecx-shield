-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema softbecx_shield
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema softbecx_shield
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `softbecx_shield` DEFAULT CHARACTER SET utf8 ;
USE `softbecx_shield` ;

-- -----------------------------------------------------
-- Table `softbecx_shield`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softbecx_shield`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  `apellido` VARCHAR(80) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `rol` VARCHAR(20) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `fecha_creacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softbecx_shield`.`incidentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softbecx_shield`.`incidentes` (
  `id_incidente` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(120) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `tipo_incidente` VARCHAR(40) NOT NULL,
  `origen` VARCHAR(20) NOT NULL DEFAULT 'MANUAL',
  `estado` VARCHAR(20) NOT NULL DEFAULT 'PENDIENTE',
  `fecha_registro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` INT NULL,
  PRIMARY KEY (`id_incidente`),
  INDEX `fk_incidentes_usuarios_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_incidentes_usuarios`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `softbecx_shield`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softbecx_shield`.`evidencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softbecx_shield`.`evidencias` (
  `id_evidencia` INT NOT NULL AUTO_INCREMENT,
  `nombre_archivo` VARCHAR(150) NOT NULL,
  `tipo_archivo` VARCHAR(50) NOT NULL,
  `ruta_archivo` VARCHAR(255) NOT NULL,
  `fecha_carga` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_incidente` INT NOT NULL,
  PRIMARY KEY (`id_evidencia`),
  INDEX `fk_evidencias_incidentes1_idx` (`id_incidente` ASC) VISIBLE,
  CONSTRAINT `fk_evidencias_incidentes1`
    FOREIGN KEY (`id_incidente`)
    REFERENCES `softbecx_shield`.`incidentes` (`id_incidente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softbecx_shield`.`analisis_riesgo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softbecx_shield`.`analisis_riesgo` (
  `id_analisis` INT NOT NULL AUTO_INCREMENT,
  `puntaje_riesgo` DECIMAL(5,2) NOT NULL,
  `nivel_riesgo` VARCHAR(20) NOT NULL,
  `explicacion` TEXT NOT NULL,
  `metodo_analisis` VARCHAR(30) NOT NULL,
  `fecha_analisis` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_incidente` INT NOT NULL,
  PRIMARY KEY (`id_analisis`),
  INDEX `fk_analisis_riesgo_incidentes1_idx` (`id_incidente` ASC) VISIBLE,
  CONSTRAINT `fk_analisis_riesgo_incidentes1`
    FOREIGN KEY (`id_incidente`)
    REFERENCES `softbecx_shield`.`incidentes` (`id_incidente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `softbecx_shield`.`recomendaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `softbecx_shield`.`recomendaciones` (
  `id_recomendacion` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(120) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `prioridad` VARCHAR(20) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_analisis` INT NOT NULL,
  PRIMARY KEY (`id_recomendacion`),
  INDEX `fk_recomendaciones_analisis_riesgo1_idx` (`id_analisis` ASC) VISIBLE,
  CONSTRAINT `fk_recomendaciones_analisis_riesgo1`
    FOREIGN KEY (`id_analisis`)
    REFERENCES `softbecx_shield`.`analisis_riesgo` (`id_analisis`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
