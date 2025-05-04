create table codikit.backend.version 
(
	legacy_id varchar(40) primary key unique,
	story_id varchar(40),
	body text,
	user_uuid varchar(40)
);
