GRANT ALL PRIVILEGES ON *.* TO 'mariadb'@'%' IDENTIFIED BY 'password';


CREATE Database theater;


use theater;


CREATE OR REPLACE TABLE table_name (a int, cc varchar(250));
Insert into table_name (a, cc) values (1, 'row 1');
Insert into table_name (a, cc) values (2, 'row 2');

CREATE OR REPLACE TABLE table_name2 (b int);
Insert into table_name2 (b) values (3);
Insert into table_name2 (b) values (4);

--------------------------------------------------------
--  DDL for Table DICHTER    not sure about the priviliges
--------------------------------------------------------
CREATE OR REPLACE TABLE DICHTER(	AUTOR VARCHAR2(20), GEBURTSJAHR DATE, GEBURTSORT VARCHAR2(20));
--------------------------------------------------------
--  DDL for Table DRAMA
--------------------------------------------------------
 CREATE OR REPLACE TABLE DRAMA (TITEL VARCHAR2(20), 
	AUTOR VARCHAR2(20), 
	JAHR_URAUFFUEHRUNG DATE, 
	ORT_URAUFFUEHRUNG VARCHAR2(20)
   ) ;
--------------------------------------------------------
--  DDL for Table ENGAMENT
--------------------------------------------------------

CREATE OR REPLACE TABLE ENGAMENT
   (	"NAME" VARCHAR2(20), 
	"SAISON_JAHR" DATE, 
	"PNR" NUMBER, 
	"DAUER" NUMBER
   ) ;
--------------------------------------------------------
--  DDL for Table ROLLE
--------------------------------------------------------

CREATE OR REPLACE TABLE ROLLE
   (	"FIGUR" VARCHAR2(20), 
	"TITEL" VARCHAR2(20), 
	"AUTOR" VARCHAR2(20), 
	"TYP" VARCHAR2(20)
   ) ;
--------------------------------------------------------
--  DDL for Table SCHAUSPIELER
--------------------------------------------------------

CREATE OR REPLACE TABLE SCHAUSPIELER
   (	"PNR" NUMBER, 
	"WOHNORT" VARCHAR2(20), 
	"NAME" VARCHAR2(20)
   ) ;
--------------------------------------------------------
--  DDL for Table SPIELZEIT
--------------------------------------------------------

CREATE OR REPLACE TABLE SPIELZEIT
   (	"SAISON_JAHR" DATE, 
	"DAUER_IN_MONATEN" NUMBER
   ) ;
--------------------------------------------------------
--  DDL for Table STELLT_DAR
--------------------------------------------------------

CREATE OR REPLACE TABLE  STELLT_DAR
   (	"PNR" NUMBER, 
	"FIGUR" VARCHAR2(20)
   ) ;
--------------------------------------------------------
--  DDL for Table THEATER
--------------------------------------------------------

CREATE OR REPLACE TABLE THEATER
   (	"NAME" VARCHAR2(20), 
	"SPARTE" VARCHAR2(20), 
	"ORT" VARCHAR2(20)
   ) ;
Insert into DICHTER (AUTOR,GEBURTSJAHR,GEBURTSORT) values ('Thomas Mann','06.06.75','L&uuml;beck');
Insert into DICHTER (AUTOR,GEBURTSJAHR,GEBURTSORT) values ('Schiller','10.11.59','Marbach');
Insert into DICHTER (AUTOR,GEBURTSJAHR,GEBURTSORT) values ('Goethe','28.08.49','Frankfurt am Main');
Insert into DICHTER (AUTOR,GEBURTSJAHR,GEBURTSORT) values ('Bertolt Brecht','10.02.98','Augsburg');
Insert into DICHTER (AUTOR,GEBURTSJAHR,GEBURTSORT) values ('Tschechow','29.01.60','Taganrog');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Die R??uber','Schiller','01.02.82','Mannheim');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Wilhelm Tell','Schiller','01.03.04','Weimar');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Maria Stuart','Schiller','03.05.00','Weimar');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Faust','Goethe','13.05.54','Hamburg');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Torquato Tasso','Goethe','20.03.07','Weimar');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Wallenstein','Schiller','01.01.98','Weimar');
Insert into DRAMA (TITEL,AUTOR,JAHR_URAUFFUEHRUNG,ORT_URAUFFUEHRUNG) values ('Der Kirschgarten','Tschechow','01.04.51','Moskau');
Insert into ENGAMENT (NAME,SAISON_JAHR,PNR,DAUER) values ('Elisabethb??hne','01.07.97','1','3');
Insert into ENGAMENT (NAME,SAISON_JAHR,PNR,DAUER) values ('Elisabethb??hne','01.08.99','2','4');
Insert into ENGAMENT (NAME,SAISON_JAHR,PNR,DAUER) values ('Theater Gummersbach','01.07.98','4','1');
Insert into ENGAMENT (NAME,SAISON_JAHR,PNR,DAUER) values ('Schillertheater NRW','01.07.01','5','4');
Insert into ENGAMENT (NAME,SAISON_JAHR,PNR,DAUER) values ('Schillertheater NRW','01.06.00','5','5');
Insert into ENGAMENT (NAME,SAISON_JAHR,PNR,DAUER) values ('Star Theater','01.08.99','2','3');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Ranevskaja','Der Kirschgarten','Tschechow','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Lopachin','Der Kirschgarten','Tschechow','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Karl Moor','Die R??uber','Schiller','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Wilhelm Tell','Wilhelm Tell','Schiller','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Maria Stuart','Maria Stuart','Schiller','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Faust','Faust','Goethe','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Wallenstein','Wallenstein','Schiller','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Torquato Tasso','Torquato Tasso','Goethe','Held');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Spiegelberg','Die R??uber','Schiller','Narr');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Grimm','Die R??uber','Schiller','Narr');
Insert into ROLLE (FIGUR,TITEL,AUTOR,TYP) values ('Elisabeth','Maria Stuart','Schiller','Nebenrolle');
Insert into SCHAUSPIELER (PNR,WOHNORT,NAME) values ('5','J??terbog ','Gerhard H??hndel ');
Insert into SCHAUSPIELER (PNR,WOHNORT,NAME) values ('1','Salzburg','Jean Pierre Cornu');
Insert into SCHAUSPIELER (PNR,WOHNORT,NAME) values ('2','K??ln','Susanne D??llmann');
Insert into SCHAUSPIELER (PNR,WOHNORT,NAME) values ('3','Hamburg','Olivia Grigolli');
Insert into SCHAUSPIELER (PNR,WOHNORT,NAME) values ('4','Gummersbach','Andre Jung');
Insert into SCHAUSPIELER (PNR,WOHNORT,NAME) values ('6','Moskau','Tschechow');
Insert into SPIELZEIT (SAISON_JAHR,DAUER_IN_MONATEN) values ('01.08.99','5');
Insert into SPIELZEIT (SAISON_JAHR,DAUER_IN_MONATEN) values ('01.06.00','5');
Insert into SPIELZEIT (SAISON_JAHR,DAUER_IN_MONATEN) values ('01.07.98','4');
Insert into SPIELZEIT (SAISON_JAHR,DAUER_IN_MONATEN) values ('01.07.01','4');
Insert into SPIELZEIT (SAISON_JAHR,DAUER_IN_MONATEN) values ('01.07.97','5');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Elisabeth');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Faust');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Grimm');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Karl Moor');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Lopachin');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Maria Stuart');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Ranevskaja');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Spiegelberg');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Torquato Tasso');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Wallenstein');
Insert into STELLT_DAR (PNR,FIGUR) values ('1','Wilhelm Tell');
Insert into STELLT_DAR (PNR,FIGUR) values ('2','Maria Stuart');
Insert into STELLT_DAR (PNR,FIGUR) values ('4','Wallenstein');
Insert into STELLT_DAR (PNR,FIGUR) values ('5','Grimm');
Insert into STELLT_DAR (PNR,FIGUR) values ('5','Spiegelberg');
Insert into STELLT_DAR (PNR,FIGUR) values ('6','Lopachin');
Insert into THEATER (NAME,SPARTE,ORT) values ('Elisabethb??hne','Schauspielhaus','Salzburg');
Insert into THEATER (NAME,SPARTE,ORT) values ('Kleines Theater Salz','Schauspielhaus','Salzburg');
Insert into THEATER (NAME,SPARTE,ORT) values ('Star Theater','Musiktheater','Hamburg');
Insert into THEATER (NAME,SPARTE,ORT) values ('Das Deutsche Theater','Schauspielhaus','Berlin');
Insert into THEATER (NAME,SPARTE,ORT) values ('Schillertheater NRW','Opernhaus','Wuppertal');
Insert into THEATER (NAME,SPARTE,ORT) values ('Theater Gummersbach','Schauspielhaus','Gummersbach');

