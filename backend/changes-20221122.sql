ALTER TABLE sessions ADD COLUMN domain_id integer;
ALTER TABLE sessions ADD COLUMN device_id character varying(48);
ALTER TABLE enclaves ADD COLUMN initiator_sess_id integer NOT NULL;
ALTER TABLE enclaves ADD COLUMN responder_sess_id integer NOT NULL;
--
-- Current Database Schema Version
--
UPDATE options SET VALUE='2022-11-22' WHERE key='schema_version';

