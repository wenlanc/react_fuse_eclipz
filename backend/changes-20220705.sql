ALTER TABLE options ADD COLUMN domain_id integer;

ALTER TABLE users ADD COLUMN email character varying(255);


ALTER TABLE services ADD COLUMN email character varying(255);
ALTER TABLE admins ADD COLUMN email character varying(255);
--
-- Current Database Schema Version
--
UPDATE options SET VALUE='2022-07-05' WHERE key='schema_version';
