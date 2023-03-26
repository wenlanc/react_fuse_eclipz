--
-- PostgreSQL database Schema
-- Manually Updated - Do not update using pgdump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 65548)
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- TOC entry 3571 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16541)
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    id integer NOT NULL,
    name public.citext NOT NULL,
    domain_id integer,
    password character varying(255),
    status character varying(1),
    issuperadmin boolean,
    icon integer,
    reset_password_token character varying(255),
    reset_password_expires timestamp without time zone
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16546)
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_id_seq OWNER TO postgres;

--
-- TOC entry 3572 (class 0 OID 0)
-- Dependencies: 211
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_id_seq OWNED BY public.admins.id;


--
-- TOC entry 212 (class 1259 OID 16550)
-- Name: admin_session_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_session_id_seq OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 40962)
-- Name: apps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.apps (
    id integer NOT NULL,
    name public.citext NOT NULL,
    service_id integer,
    status character varying(1),
    allowed_ips character varying(250)
);


ALTER TABLE public.apps OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 40961)
-- Name: apps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.apps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.apps_id_seq OWNER TO postgres;

--
-- TOC entry 3573 (class 0 OID 0)
-- Dependencies: 227
-- Name: apps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.apps_id_seq OWNED BY public.apps.id;


--
-- TOC entry 213 (class 1259 OID 16557)
-- Name: domains; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.domains (
    id integer NOT NULL,
    name public.citext NOT NULL,
    status character varying(1),
    image character varying(255)
);


ALTER TABLE public.domains OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16560)
-- Name: domain_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.domain_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.domain_id_seq OWNER TO postgres;

--
-- TOC entry 3574 (class 0 OID 0)
-- Dependencies: 214
-- Name: domain_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.domain_id_seq OWNED BY public.domains.id;


--
-- TOC entry 232 (class 1259 OID 57362)
-- Name: downloads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.downloads (
    id integer NOT NULL,
    description character varying(500),
    date timestamp without time zone,
    filename character varying(100) NOT NULL,
    status character(1) NOT NULL
);


ALTER TABLE public.downloads OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 57361)
-- Name: downloads_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.downloads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.downloads_id_seq OWNER TO postgres;

--
-- TOC entry 3575 (class 0 OID 0)
-- Dependencies: 231
-- Name: downloads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.downloads_id_seq OWNED BY public.downloads.id;


--
-- TOC entry 234 (class 1259 OID 65705)
-- Name: enclaves; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enclaves (
    id integer NOT NULL,
    initiator_sess_id int NOT NULL,
    responder_sess_id int NOT NULL,
    initiator_role character(1) NOT NULL,
    initiator_uid integer NOT NULL,
    responder_role character(1) NOT NULL,
    responder_uid integer NOT NULL,
    enclave_id character varying(50) NOT NULL,
    initiator_rxbytes bigint,
    initiator_txbytes bigint,
    responder_rxbytes bigint,
    responder_txbytes bigint,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone,
    status character(1) NOT NULL
);


ALTER TABLE public.enclaves OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 65704)
-- Name: enclaves_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.enclaves_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.enclaves_id_seq OWNER TO postgres;

--
-- TOC entry 3576 (class 0 OID 0)
-- Dependencies: 233
-- Name: enclaves_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.enclaves_id_seq OWNED BY public.enclaves.id;


--
-- TOC entry 215 (class 1259 OID 16561)
-- Name: group_access_control; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_access_control (
    id integer NOT NULL,
    group_id integer,
    app_id integer,
    status character varying(1)
);


ALTER TABLE public.group_access_control OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16564)
-- Name: group_access_control_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.group_access_control_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.group_access_control_id_seq OWNER TO postgres;

--
-- TOC entry 3577 (class 0 OID 0)
-- Dependencies: 216
-- Name: group_access_control_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.group_access_control_id_seq OWNED BY public.group_access_control.id;


--
-- TOC entry 217 (class 1259 OID 16565)
-- Name: group_members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_members (
    id integer NOT NULL,
    group_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.group_members OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16568)
-- Name: group_member_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.group_member_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.group_member_id_seq OWNER TO postgres;

--
-- TOC entry 3578 (class 0 OID 0)
-- Dependencies: 218
-- Name: group_member_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.group_member_id_seq OWNED BY public.group_members.id;


--
-- TOC entry 236 (class 1259 OID 81933)
-- Name: options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.options (
    id integer NOT NULL,
    key character varying(255),
    value character varying(255),
    status character varying(1)
);


ALTER TABLE public.options OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 81932)
-- Name: options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.options_id_seq OWNER TO postgres;

--
-- TOC entry 3579 (class 0 OID 0)
-- Dependencies: 235
-- Name: options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.options_id_seq OWNED BY public.options.id;


--
-- TOC entry 219 (class 1259 OID 16569)
-- Name: services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services (
    id integer NOT NULL,
    name public.citext NOT NULL,
    domain_id integer,
    password character varying(255),
    status character varying(1),
    icon integer,
    wg_key character varying(255),
    public_ip character varying(255),
    virtual_ip character varying(255),
    local_ip character varying(255)
);


ALTER TABLE public.services OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16574)
-- Name: service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.service_id_seq OWNER TO postgres;

--
-- TOC entry 3580 (class 0 OID 0)
-- Dependencies: 220
-- Name: service_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_id_seq OWNED BY public.services.id;


--
-- TOC entry 230 (class 1259 OID 40971)
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    session_id character varying(250),
    device_id char varying(48),
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone,
    role character varying(1),
    status character varying(1),
    uid integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 40970)
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- TOC entry 3581 (class 0 OID 0)
-- Dependencies: 229
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- TOC entry 222 (class 1259 OID 16584)
-- Name: user_access_control; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_access_control (
    id integer NOT NULL,
    user_id integer,
    app_id integer,
    status character varying(1)
);


ALTER TABLE public.user_access_control OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16587)
-- Name: user_access_control_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_access_control_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_access_control_id_seq OWNER TO postgres;

--
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 223
-- Name: user_access_control_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_access_control_id_seq OWNED BY public.user_access_control.id;


--
-- TOC entry 224 (class 1259 OID 16588)
-- Name: user_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_groups (
    id integer NOT NULL,
    name public.citext NOT NULL,
    domain_id integer,
    status character varying(1)
);


ALTER TABLE public.user_groups OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16591)
-- Name: user_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_group_id_seq OWNER TO postgres;

--
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 225
-- Name: user_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_group_id_seq OWNED BY public.user_groups.id;


--
-- TOC entry 221 (class 1259 OID 16579)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name public.citext NOT NULL,
    domain_id integer,
    password character varying(255),
    status character varying(1),
    icon integer,
    wg_key character varying(255),
    virtual_ip character varying(255),
    public_ip character varying(255),
    local_ip character varying(255),
    public_key character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16592)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3584 (class 0 OID 0)
-- Dependencies: 226
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;


--
-- TOC entry 3316 (class 2604 OID 16598)
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);


--
-- TOC entry 3324 (class 2604 OID 40965)
-- Name: apps id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apps ALTER COLUMN id SET DEFAULT nextval('public.apps_id_seq'::regclass);


--
-- TOC entry 3317 (class 2604 OID 16601)
-- Name: domains id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.domains ALTER COLUMN id SET DEFAULT nextval('public.domain_id_seq'::regclass);


--
-- TOC entry 3326 (class 2604 OID 57365)
-- Name: downloads id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.downloads ALTER COLUMN id SET DEFAULT nextval('public.downloads_id_seq'::regclass);


--
-- TOC entry 3327 (class 2604 OID 65708)
-- Name: enclaves id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enclaves ALTER COLUMN id SET DEFAULT nextval('public.enclaves_id_seq'::regclass);


--
-- TOC entry 3318 (class 2604 OID 16602)
-- Name: group_access_control id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_access_control ALTER COLUMN id SET DEFAULT nextval('public.group_access_control_id_seq'::regclass);


--
-- TOC entry 3319 (class 2604 OID 16603)
-- Name: group_members id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members ALTER COLUMN id SET DEFAULT nextval('public.group_member_id_seq'::regclass);


--
-- TOC entry 3328 (class 2604 OID 81936)
-- Name: options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.options ALTER COLUMN id SET DEFAULT nextval('public.options_id_seq'::regclass);


--
-- TOC entry 3320 (class 2604 OID 16604)
-- Name: services id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.service_id_seq'::regclass);


--
-- TOC entry 3325 (class 2604 OID 40974)
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- TOC entry 3322 (class 2604 OID 16607)
-- Name: user_access_control id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_access_control ALTER COLUMN id SET DEFAULT nextval('public.user_access_control_id_seq'::regclass);


--
-- TOC entry 3323 (class 2604 OID 16608)
-- Name: user_groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_groups ALTER COLUMN id SET DEFAULT nextval('public.user_group_id_seq'::regclass);


--
-- TOC entry 3321 (class 2604 OID 16606)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);

--
-- TOC entry 3585 (class 0 OID 0)
-- Dependencies: 211
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_id_seq', 0, true);


--
-- TOC entry 3586 (class 0 OID 0)
-- Dependencies: 212
-- Name: admin_session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_session_id_seq', 0, false);


--
-- TOC entry 3587 (class 0 OID 0)
-- Dependencies: 227
-- Name: apps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.apps_id_seq', 0, true);


--
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 214
-- Name: domain_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.domain_id_seq', 0, true);


--
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 231
-- Name: downloads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.downloads_id_seq', 0, true);


--
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 233
-- Name: enclaves_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.enclaves_id_seq', 0, false);


--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 216
-- Name: group_access_control_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.group_access_control_id_seq', 30, true);


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 218
-- Name: group_member_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.group_member_id_seq', 0, true);


--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 235
-- Name: options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.options_id_seq', 0, true);


--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 220
-- Name: service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_id_seq', 0, true);


--
-- TOC entry 3595 (class 0 OID 0)
-- Dependencies: 229
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 0, true);


--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 223
-- Name: user_access_control_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_access_control_id_seq', 0, true);


--
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 225
-- Name: user_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_group_id_seq', 0, true);


--
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 226
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 0, true);


--
-- TOC entry 3330 (class 2606 OID 16613)
-- Name: admins admin_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admin_id_key UNIQUE (id);


--
-- TOC entry 3332 (class 2606 OID 65654)
-- Name: admins admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id, name);


--
-- TOC entry 3334 (class 2606 OID 65656)
-- Name: admins admins_name_domain_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_name_domain_id_key UNIQUE (name, domain_id);


--
-- TOC entry 3378 (class 2606 OID 49169)
-- Name: apps apps_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT apps_id_key UNIQUE (id);


--
-- TOC entry 3380 (class 2606 OID 65658)
-- Name: apps apps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT apps_pkey PRIMARY KEY (id, name);


--
-- TOC entry 3337 (class 2606 OID 32801)
-- Name: domains domain_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domain_id_key UNIQUE (id);


--
-- TOC entry 3339 (class 2606 OID 65660)
-- Name: domains domain_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domain_pkey PRIMARY KEY (id, name);


--
-- TOC entry 3341 (class 2606 OID 65662)
-- Name: domains domains_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domains_name_key UNIQUE (name);


--
-- TOC entry 3385 (class 2606 OID 57369)
-- Name: downloads downloads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.downloads
    ADD CONSTRAINT downloads_pkey PRIMARY KEY (id);


--
-- TOC entry 3387 (class 2606 OID 65710)
-- Name: enclaves enclaves_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enclaves
    ADD CONSTRAINT enclaves_pkey PRIMARY KEY (id);


--
-- TOC entry 3345 (class 2606 OID 16627)
-- Name: group_access_control group_access_control_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_access_control
    ADD CONSTRAINT group_access_control_pkey PRIMARY KEY (id);


--
-- TOC entry 3349 (class 2606 OID 16629)
-- Name: group_members group_member_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_member_pkey PRIMARY KEY (id);


--
-- TOC entry 3389 (class 2606 OID 81940)
-- Name: options options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.options
    ADD CONSTRAINT options_pkey PRIMARY KEY (id);


--
-- TOC entry 3353 (class 2606 OID 16631)
-- Name: services service_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT service_id_key UNIQUE (id);


--
-- TOC entry 3355 (class 2606 OID 65664)
-- Name: services service_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT service_pkey PRIMARY KEY (id, name);


--
-- TOC entry 3357 (class 2606 OID 65666)
-- Name: services services_name_domain_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_name_domain_id_key UNIQUE (name, domain_id);


--
-- TOC entry 3383 (class 2606 OID 40976)
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 3369 (class 2606 OID 16637)
-- Name: user_access_control user_access_control_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_access_control
    ADD CONSTRAINT user_access_control_pkey PRIMARY KEY (id);


--
-- TOC entry 3372 (class 2606 OID 16639)
-- Name: user_groups user_group_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_group_id_key UNIQUE (id);


--
-- TOC entry 3374 (class 2606 OID 65698)
-- Name: user_groups user_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_group_pkey PRIMARY KEY (id, name);


--
-- TOC entry 3376 (class 2606 OID 65702)
-- Name: user_groups user_groups_name_domain_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_groups
    ADD CONSTRAINT user_groups_name_domain_id_key UNIQUE (name, domain_id);


--
-- TOC entry 3361 (class 2606 OID 16643)
-- Name: users user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_id_key UNIQUE (id);


--
-- TOC entry 3363 (class 2606 OID 65676)
-- Name: users user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id, name);


--
-- TOC entry 3365 (class 2606 OID 65678)
-- Name: users users_name_domain_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_domain_id_key UNIQUE (name, domain_id);


--
-- TOC entry 3335 (class 1259 OID 32812)
-- Name: fk_admin_domain_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_admin_domain_id ON public.admins USING btree (domain_id);


--
-- TOC entry 3381 (class 1259 OID 49167)
-- Name: fk_apps_service_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_apps_service_id ON public.apps USING btree (service_id);


--
-- TOC entry 3350 (class 1259 OID 32824)
-- Name: fk_service_domain_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_service_domain_id ON public.services USING btree (domain_id);


--
-- TOC entry 3358 (class 1259 OID 32818)
-- Name: fk_user_domain_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fk_user_domain_id ON public.users USING btree (domain_id);


--
-- TOC entry 3346 (class 1259 OID 16652)
-- Name: fki_fk_gm_group_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_gm_group_id ON public.group_members USING btree (group_id);


--
-- TOC entry 3347 (class 1259 OID 16653)
-- Name: fki_fk_gm_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_gm_user_id ON public.group_members USING btree (user_id);


--
-- TOC entry 3342 (class 1259 OID 16654)
-- Name: fki_fk_group_acs_allow_ip_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_group_acs_allow_ip_id ON public.group_access_control USING btree (app_id);


--
-- TOC entry 3343 (class 1259 OID 16655)
-- Name: fki_fk_group_acs_group_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_group_acs_group_id ON public.group_access_control USING btree (group_id);


--
-- TOC entry 3351 (class 1259 OID 16656)
-- Name: fki_fk_service_domain_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_service_domain_id ON public.services USING btree (domain_id);


--
-- TOC entry 3366 (class 1259 OID 16658)
-- Name: fki_fk_uac_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_uac_user_id ON public.user_access_control USING btree (user_id);


--
-- TOC entry 3367 (class 1259 OID 16659)
-- Name: fki_fk_uas_allowed_ip_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_uas_allowed_ip_id ON public.user_access_control USING btree (app_id);


--
-- TOC entry 3359 (class 1259 OID 16660)
-- Name: fki_fk_user_domain_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_user_domain_id ON public.users USING btree (domain_id);


--
-- TOC entry 3370 (class 1259 OID 16662)
-- Name: fki_fk_yser_group_domain_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_yser_group_domain_id ON public.user_groups USING btree (domain_id);


--
-- Name: gid_uid_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX gid_uid_unique ON public.group_members USING btree (group_id, user_id);


--
-- Name: idx_gid_uid_uique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_gid_uid_uique ON public.group_access_control USING btree (group_id, app_id);


--
-- Name: uid_aid_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX uid_aid_unique ON public.user_access_control USING btree (user_id, app_id);


--
-- Name: admins admin_domain_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admin_domain_id_fkey FOREIGN KEY (domain_id) REFERENCES public.domains(id) NOT VALID;


--
-- TOC entry 3399 (class 2606 OID 49162)
-- Name: apps apps_service_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT apps_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id) NOT VALID;


--
-- TOC entry 3393 (class 2606 OID 16683)
-- Name: group_members fk_gm_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT fk_gm_group_id FOREIGN KEY (group_id) REFERENCES public.user_groups(id);


--
-- TOC entry 3394 (class 2606 OID 16688)
-- Name: group_members fk_gm_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT fk_gm_user_id FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 3391 (class 2606 OID 16698)
-- Name: group_access_control fk_group_acs_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_access_control
    ADD CONSTRAINT fk_group_acs_group_id FOREIGN KEY (group_id) REFERENCES public.user_groups(id);


--
-- TOC entry 3397 (class 2606 OID 16713)
-- Name: user_access_control fk_uac_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_access_control
    ADD CONSTRAINT fk_uac_user_id FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 3392 (class 2606 OID 49175)
-- Name: group_access_control group_access_control_app_ip_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_access_control
    ADD CONSTRAINT group_access_control_app_ip_id_fkey FOREIGN KEY (app_id) REFERENCES public.apps(id) NOT VALID;


--
-- TOC entry 3395 (class 2606 OID 32819)
-- Name: services service_domain_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT service_domain_id_fkey FOREIGN KEY (domain_id) REFERENCES public.domains(id) NOT VALID;


--
-- TOC entry 3398 (class 2606 OID 49170)
-- Name: user_access_control user_access_control_app_ip_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_access_control
    ADD CONSTRAINT user_access_control_app_ip_id_fkey FOREIGN KEY (app_id) REFERENCES public.apps(id) NOT VALID;


--
-- TOC entry 3396 (class 2606 OID 32813)
-- Name: users user_domain_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_domain_id_fkey FOREIGN KEY (domain_id) REFERENCES public.domains(id) NOT VALID;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
