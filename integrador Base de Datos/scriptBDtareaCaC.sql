create database integrador_cac;
create table oradores 
(
	id_orador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (30) NOT NULL,
    apellido VARCHAR (30) NOT NULL,
    mail VARCHAR (60) NOT NULL UNIQUE,
    tema VARCHAR (300) NOT NULL,
    fecha_alta DATE
);

insert into oradores (nombre, apellido, mail, tema, fecha_alta) VALUES
('Juan', 'Perez', 'juan.perez@email.com', 'Inteligencia Artificial', '2023-05-01'),
('María', 'Gomez', 'maria.gomez@email.com', 'Desarrollo Sostenible', '2023-05-02'),
('Pedro', 'Lopez', 'pedro.lopez@email.com', 'Blockchain', '2023-05-03'),
('Laura', 'Martinez', 'laura.martinez@email.com', 'Big Data', '2023-05-04'),
('Carlos', 'Rodriguez', 'carlos.rodriguez@email.com', 'Ciberseguridad', '2023-05-05'),
('Ana', 'Fernandez', 'ana.fernandez@email.com', 'Internet de las cosas', '2023-05-06'),
('Miguel', 'Garcia', 'miguel.garcia@email.com', 'Machine Learning', '2023-05-07'),
('Sofia', 'Diaz', 'sofia.diaz@email.com', 'Robótica', '2023-05-08'),
('Gabriel', 'Hernandez', 'gabriel.hernandez@email.com', 'Realidad Virtual', '2023-05-09'),
('Luis', 'Torres', 'luis.torres@email.com', 'Desarrollo Web', '2023-05-10');
