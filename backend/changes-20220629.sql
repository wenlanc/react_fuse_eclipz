
CREATE TABLE public.gw_groups (
    id integer NOT NULL,
    name citext NOT NULL,
    domain_id integer,
    status character varying(1)
);

CREATE SEQUENCE public.gw_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.gw_groups_id_seq OWNED BY public.gw_groups.id;

ALTER TABLE ONLY public.gw_groups ALTER COLUMN id SET DEFAULT nextval('public.gw_groups_id_seq'::regclass);


ALTER TABLE ONLY public.gw_groups
    ADD CONSTRAINT gw_groups_id_key UNIQUE (id);

ALTER TABLE ONLY public.gw_groups
    ADD CONSTRAINT gw_groups_name_domain_id_key UNIQUE (name, domain_id);


ALTER TABLE ONLY public.gw_groups
    ADD CONSTRAINT gw_groups_pkey PRIMARY KEY (id);




CREATE TABLE public.gw_group_members (
    id integer NOT NULL,
    gw_group_id integer NOT NULL,
    gateway_id integer NOT NULL
);

CREATE SEQUENCE public.gw_group_members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.gw_group_members_id_seq OWNED BY public.gw_group_members.id;


ALTER TABLE ONLY public.gw_group_members ALTER COLUMN id SET DEFAULT nextval('public.gw_group_members_id_seq'::regclass);


ALTER TABLE ONLY public.gw_group_members
    ADD CONSTRAINT gw_group_members_pkey PRIMARY KEY (id);


ALTER TABLE ONLY public.gw_group_members
    ADD CONSTRAINT fk_gw_group_gateway_id FOREIGN KEY (gateway_id) REFERENCES public.services(id) NOT VALID;


ALTER TABLE ONLY public.gw_group_members
    ADD CONSTRAINT fk_gw_group_id_id FOREIGN KEY (gw_group_id) REFERENCES public.gw_groups(id);


--
-- Current Database Schema Version
--
UPDATE options SET VALUE='2022-06-29' WHERE key='schema_version';
