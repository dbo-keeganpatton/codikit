CREATE TABLE codikit.backend.story (
    story_id UUID PRIMARY KEY,
    title TEXT UNIQUE,
    authors TEXT[],
    summary TEXT[],
    subjects TEXT[],
    genres TEXT[],
    languages TEXT[]
);

