/* Json Cleaning Boiler Plate*/
create table codikit.backend.story_parsed as(
	select
	title as storyTitle,
	to_jsonb(authors) as authorList,
	summaries as storySummary, 
	subjects as storySubjects,
	to_jsonb(bookshelves) as storyGenres,
	languages as storyLanguages,
	replace(replace(replace(formats, '''', '"'),'/', '_')::json->>'text_html', '_','/') as textHtmlLink,
	replace(replace(replace(formats, '''', '"'),'/', '_')::json->>'application_epub+zip', '_','/') as epubLink,
	replace(replace(replace(formats, '''', '"'),'/', '_')::json->>'image_jpeg', '_','/') as imageLink,
	replace(replace(replace(formats, '''', '"'),'/', '_')::json->>'text_plain', '_','/') as textLink
	from codikit.backend.story
)
