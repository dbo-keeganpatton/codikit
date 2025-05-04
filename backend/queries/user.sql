create table codikit.backend.user 
(
	name varchar(40) constraint userKey primary key unique,
	password varchar(40),
	user_uuid varchar(40) unique
);
