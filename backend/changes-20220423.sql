CREATE EXTENSION IF NOT EXISTS pgcrypto;

--
-- Add citext support for all tables
--
CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';
ALTER TABLE admins ALTER COLUMN name TYPE public.citext;
ALTER TABLE apps ALTER COLUMN name TYPE public.citext;
ALTER TABLE domains ALTER COLUMN name TYPE public.citext;
ALTER TABLE services ALTER COLUMN name TYPE public.citext;
ALTER TABLE user_groups ALTER COLUMN name TYPE public.citext;
ALTER TABLE users ALTER COLUMN name TYPE public.citext;

--
-- Set default values for options
--
CREATE SEQUENCE options_id_seq;
ALTER TABLE options ALTER COLUMN id SET DEFAULT nextval('options_id_seq');
INSERT INTO options (key, value, status) VALUES('backgroundimage', 'backgroundimage.png', 'A');
INSERT INTO options (key, value, status) VALUES('use_backgroundimage', 'false', 'A');
INSERT INTO options (key, value, status) VALUES('welcomeText', 'Welcome To Eclipz', 'A');
INSERT INTO options (key, value, status) VALUES('welcomeBackgroundColor', '#ff0000', 'A');
INSERT INTO options (key, value, status) VALUES('schema_version', '0', 'A');

--
-- Current Database Schema Version
--
UPDATE options SET VALUE='2022-04-23' WHERE key='schema_version';
