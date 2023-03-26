ALTER TABLE admins ADD COLUMN is2fa boolean;
ALTER TABLE admins ADD COLUMN token_2fa character varying(255);

ALTER TABLE domains ADD COLUMN icon character varying(255);
--
-- Current Database Schema Version
--
UPDATE options SET VALUE='2022-05-25' WHERE key='schema_version';
