DROP SCHEMA IF EXISTS `hs_decks`;

CREATE SCHEMA IF NOT EXISTS `hs_decks` DEFAULT CHARACTER SET utf8;
USE `hs_decks`;

DROP user hs_user@'%';
FLUSH PRIVILEGES;
CREATE USER hs_user@'%' IDENTIFIED BY 'hearthstone';
GRANT ALL PRIVILEGES ON hs_decks.* TO hs_user@'%';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `users` (
  `ID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL UNIQUE,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

insert into users values(1,'test','test');

CREATE TABLE IF NOT EXISTS `decks` (
  `ID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userID` INT(10) UNSIGNED NOT NULL,
  `name` VARCHAR(64) NOT NULL,
  `cardData` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`userID`)
    REFERENCES `hs_decks`.`users` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE),
  UNIQUE(userID,name)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

