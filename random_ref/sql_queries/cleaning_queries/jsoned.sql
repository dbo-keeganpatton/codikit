/* Json Cleaning Boiler Plate*/
select
replace(replace(formats, '''', '"'),'/', '_')::json->>'text_html'
from codikit.backend.story
