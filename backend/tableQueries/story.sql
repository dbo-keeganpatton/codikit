create table codikit.backend.story 
(
	legacy_id varchar(40) unique,
	story_id varchar(40) unique,
	title varchar(40),
	body text,
	user_uuid varchar(40),
	genre varchar(40),
	genre_uuid varchar(40),
	author_uuid(40)
	
);
