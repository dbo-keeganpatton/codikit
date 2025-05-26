/* Inserts a record for a new user at the time of sign up and generates a random UUID for that user */
INSERT INTO codikit.backend."user" ("name", "password", "user_uuid")
VALUES ('some User', 'Some Password', gen_random_uuid());
