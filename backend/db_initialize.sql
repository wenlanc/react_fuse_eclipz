--
-- Initial domain name and superadmin setup
--
CREATE EXTENSION IF NOT EXISTS pgcrypto;
INSERT INTO domains (id, name, status, image) VALUES(1, 'superadmin', 'A', '1.png');
INSERT INTO admins (name, domain_id, issuperadmin, password, status) VALUES('superadmin', 1, 't', crypt('ZSDkj13278fwe', gen_salt('bf', 10)), 'A');

--
-- Initial values for options
--
INSERT INTO options (key, value, status) VALUES('backgroundimage', 'backgroundimage.png', 'A');
INSERT INTO options (key, value, status) VALUES('use_backgroundimage', 'false', 'A');
INSERT INTO options (key, value, status) VALUES('welcomeText', 'Welcome To Eclipz', 'A');
INSERT INTO options (key, value, status) VALUES('welcomeBackgroundColor', '#000000', 'A');
INSERT INTO options (key, value, status) VALUES('schema_version', '0', 'A');

--
-- Current Database Schema Version
--
UPDATE options SET VALUE='2022-11-22' WHERE key='schema_version';

