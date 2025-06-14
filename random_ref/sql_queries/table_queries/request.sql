create table codikit.backend.request 
(
	request_id varchar(40) primary key unique,
	story_id varchar(40),
	legacy_id varchar(40),
	user_uuid varchar(40)
);
