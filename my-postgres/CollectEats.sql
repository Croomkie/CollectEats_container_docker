--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2023-10-26 19:20:02

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 35063)
-- Name: adresses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adresses (
    id integer NOT NULL,
    ligne1 character varying(50),
    codepostal character varying(50),
    region character varying(50),
    pays character varying(50),
    ligne2 character varying(50),
    ligne3 character varying(50),
    ville character varying(50)
);


ALTER TABLE public.adresses OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 35062)
-- Name: adresses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adresses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adresses_id_seq OWNER TO postgres;

--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 216
-- Name: adresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adresses_id_seq OWNED BY public.adresses.id;


--
-- TOC entry 219 (class 1259 OID 35070)
-- Name: choixoptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.choixoptions (
    id integer NOT NULL,
    nomchoix character varying(50),
    surcout numeric(10,2)
);


ALTER TABLE public.choixoptions OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 35069)
-- Name: choixoptions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.choixoptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.choixoptions_id_seq OWNER TO postgres;

--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 218
-- Name: choixoptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.choixoptions_id_seq OWNED BY public.choixoptions.id;


--
-- TOC entry 229 (class 1259 OID 35135)
-- Name: horairesouverture; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.horairesouverture (
    id integer NOT NULL,
    jour character varying(50),
    heureouverturematin time without time zone,
    heurefermeturematin time without time zone,
    heureouverturesoir time without time zone,
    heurefermeturesoir time without time zone,
    restaurantid integer
);


ALTER TABLE public.horairesouverture OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 35134)
-- Name: horairesouverture_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.horairesouverture_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.horairesouverture_id_seq OWNER TO postgres;

--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 228
-- Name: horairesouverture_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.horairesouverture_id_seq OWNED BY public.horairesouverture.id;


--
-- TOC entry 227 (class 1259 OID 35123)
-- Name: imagesplat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.imagesplat (
    id integer NOT NULL,
    imageurl character varying(255),
    platid integer
);


ALTER TABLE public.imagesplat OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 35122)
-- Name: imagesplat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.imagesplat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.imagesplat_id_seq OWNER TO postgres;

--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 226
-- Name: imagesplat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.imagesplat_id_seq OWNED BY public.imagesplat.id;


--
-- TOC entry 221 (class 1259 OID 35077)
-- Name: optionsplat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.optionsplat (
    id integer NOT NULL,
    nomoption character varying(50),
    choixoptionid integer
);


ALTER TABLE public.optionsplat OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 35076)
-- Name: optionsplat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.optionsplat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.optionsplat_id_seq OWNER TO postgres;

--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 220
-- Name: optionsplat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.optionsplat_id_seq OWNED BY public.optionsplat.id;


--
-- TOC entry 225 (class 1259 OID 35106)
-- Name: plats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plats (
    id integer NOT NULL,
    nomplat character varying(50),
    description character varying(50),
    prixbase numeric(10,2),
    choixoptionid integer,
    restaurantid integer
);


ALTER TABLE public.plats OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 35105)
-- Name: plats_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.plats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plats_id_seq OWNER TO postgres;

--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 224
-- Name: plats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.plats_id_seq OWNED BY public.plats.id;


--
-- TOC entry 223 (class 1259 OID 35089)
-- Name: restaurants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurants (
    id integer NOT NULL,
    nom character varying(50),
    telephone character varying(50),
    utilisateurid integer,
    adresseid integer
);


ALTER TABLE public.restaurants OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 35088)
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurants_id_seq OWNER TO postgres;

--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 222
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.restaurants.id;


--
-- TOC entry 215 (class 1259 OID 35056)
-- Name: utilisateurs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utilisateurs (
    id integer NOT NULL
);


ALTER TABLE public.utilisateurs OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 35055)
-- Name: utilisateurs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.utilisateurs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.utilisateurs_id_seq OWNER TO postgres;

--
-- TOC entry 3409 (class 0 OID 0)
-- Dependencies: 214
-- Name: utilisateurs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.utilisateurs_id_seq OWNED BY public.utilisateurs.id;


--
-- TOC entry 3209 (class 2604 OID 35066)
-- Name: adresses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adresses ALTER COLUMN id SET DEFAULT nextval('public.adresses_id_seq'::regclass);


--
-- TOC entry 3210 (class 2604 OID 35073)
-- Name: choixoptions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.choixoptions ALTER COLUMN id SET DEFAULT nextval('public.choixoptions_id_seq'::regclass);


--
-- TOC entry 3215 (class 2604 OID 35138)
-- Name: horairesouverture id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horairesouverture ALTER COLUMN id SET DEFAULT nextval('public.horairesouverture_id_seq'::regclass);


--
-- TOC entry 3214 (class 2604 OID 35126)
-- Name: imagesplat id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagesplat ALTER COLUMN id SET DEFAULT nextval('public.imagesplat_id_seq'::regclass);


--
-- TOC entry 3211 (class 2604 OID 35080)
-- Name: optionsplat id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.optionsplat ALTER COLUMN id SET DEFAULT nextval('public.optionsplat_id_seq'::regclass);


--
-- TOC entry 3213 (class 2604 OID 35109)
-- Name: plats id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plats ALTER COLUMN id SET DEFAULT nextval('public.plats_id_seq'::regclass);


--
-- TOC entry 3212 (class 2604 OID 35092)
-- Name: restaurants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);


--
-- TOC entry 3208 (class 2604 OID 35059)
-- Name: utilisateurs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilisateurs ALTER COLUMN id SET DEFAULT nextval('public.utilisateurs_id_seq'::regclass);


--
-- TOC entry 3384 (class 0 OID 35063)
-- Dependencies: 217
-- Data for Name: adresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adresses (id, ligne1, codepostal, region, pays, ligne2, ligne3, ville) FROM stdin;
1	123 Rue Principale	75000	Île-de-France	France	\N	\N	Paris
2	456 Rue Secondaire	69000	Auvergne-Rhône-Alpes	France	\N	\N	Lyon
\.


--
-- TOC entry 3386 (class 0 OID 35070)
-- Dependencies: 219
-- Data for Name: choixoptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.choixoptions (id, nomchoix, surcout) FROM stdin;
1	Option A	1.50
2	Option B	2.00
\.


--
-- TOC entry 3396 (class 0 OID 35135)
-- Dependencies: 229
-- Data for Name: horairesouverture; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.horairesouverture (id, jour, heureouverturematin, heurefermeturematin, heureouverturesoir, heurefermeturesoir, restaurantid) FROM stdin;
1	Lundi	08:00:00	12:00:00	14:00:00	20:00:00	1
2	Mardi	08:00:00	12:00:00	14:00:00	20:00:00	2
\.


--
-- TOC entry 3394 (class 0 OID 35123)
-- Dependencies: 227
-- Data for Name: imagesplat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.imagesplat (id, imageurl, platid) FROM stdin;
\.


--
-- TOC entry 3388 (class 0 OID 35077)
-- Dependencies: 221
-- Data for Name: optionsplat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.optionsplat (id, nomoption, choixoptionid) FROM stdin;
1	Option Plat A1	1
2	Option Plat B1	2
\.


--
-- TOC entry 3392 (class 0 OID 35106)
-- Dependencies: 225
-- Data for Name: plats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plats (id, nomplat, description, prixbase, choixoptionid, restaurantid) FROM stdin;
1	Plat A	Description Plat A	10.00	1	1
2	Plat B	Description Plat B	12.00	2	2
\.


--
-- TOC entry 3390 (class 0 OID 35089)
-- Dependencies: 223
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.restaurants (id, nom, telephone, utilisateurid, adresseid) FROM stdin;
1	Restaurant Parisien	+33123456789	1	1
2	Restaurant Lyonnais	+33498765432	2	2
\.


--
-- TOC entry 3382 (class 0 OID 35056)
-- Dependencies: 215
-- Data for Name: utilisateurs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.utilisateurs (id) FROM stdin;
1
2
\.


--
-- TOC entry 3410 (class 0 OID 0)
-- Dependencies: 216
-- Name: adresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adresses_id_seq', 2, true);


--
-- TOC entry 3411 (class 0 OID 0)
-- Dependencies: 218
-- Name: choixoptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.choixoptions_id_seq', 2, true);


--
-- TOC entry 3412 (class 0 OID 0)
-- Dependencies: 228
-- Name: horairesouverture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.horairesouverture_id_seq', 2, true);


--
-- TOC entry 3413 (class 0 OID 0)
-- Dependencies: 226
-- Name: imagesplat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.imagesplat_id_seq', 1, false);


--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 220
-- Name: optionsplat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.optionsplat_id_seq', 2, true);


--
-- TOC entry 3415 (class 0 OID 0)
-- Dependencies: 224
-- Name: plats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plats_id_seq', 2, true);


--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 222
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurants_id_seq', 2, true);


--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 214
-- Name: utilisateurs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utilisateurs_id_seq', 2, true);


--
-- TOC entry 3219 (class 2606 OID 35068)
-- Name: adresses adresses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adresses
    ADD CONSTRAINT adresses_pkey PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 35075)
-- Name: choixoptions choixoptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.choixoptions
    ADD CONSTRAINT choixoptions_pkey PRIMARY KEY (id);


--
-- TOC entry 3231 (class 2606 OID 35140)
-- Name: horairesouverture horairesouverture_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horairesouverture
    ADD CONSTRAINT horairesouverture_pkey PRIMARY KEY (id);


--
-- TOC entry 3229 (class 2606 OID 35128)
-- Name: imagesplat imagesplat_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagesplat
    ADD CONSTRAINT imagesplat_pkey PRIMARY KEY (id);


--
-- TOC entry 3223 (class 2606 OID 35082)
-- Name: optionsplat optionsplat_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.optionsplat
    ADD CONSTRAINT optionsplat_pkey PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 35111)
-- Name: plats plats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plats
    ADD CONSTRAINT plats_pkey PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 35094)
-- Name: restaurants restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 35061)
-- Name: utilisateurs utilisateurs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilisateurs
    ADD CONSTRAINT utilisateurs_pkey PRIMARY KEY (id);


--
-- TOC entry 3238 (class 2606 OID 35141)
-- Name: horairesouverture horairesouverture_restaurantid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horairesouverture
    ADD CONSTRAINT horairesouverture_restaurantid_fkey FOREIGN KEY (restaurantid) REFERENCES public.restaurants(id);


--
-- TOC entry 3237 (class 2606 OID 35129)
-- Name: imagesplat imagesplat_platid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imagesplat
    ADD CONSTRAINT imagesplat_platid_fkey FOREIGN KEY (platid) REFERENCES public.plats(id);


--
-- TOC entry 3232 (class 2606 OID 35083)
-- Name: optionsplat optionsplat_choixoptionid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.optionsplat
    ADD CONSTRAINT optionsplat_choixoptionid_fkey FOREIGN KEY (choixoptionid) REFERENCES public.choixoptions(id);


--
-- TOC entry 3235 (class 2606 OID 35112)
-- Name: plats plats_choixoptionid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plats
    ADD CONSTRAINT plats_choixoptionid_fkey FOREIGN KEY (choixoptionid) REFERENCES public.choixoptions(id);


--
-- TOC entry 3236 (class 2606 OID 35117)
-- Name: plats plats_restaurantid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plats
    ADD CONSTRAINT plats_restaurantid_fkey FOREIGN KEY (restaurantid) REFERENCES public.restaurants(id);


--
-- TOC entry 3233 (class 2606 OID 35100)
-- Name: restaurants restaurants_adresseid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_adresseid_fkey FOREIGN KEY (adresseid) REFERENCES public.adresses(id);


--
-- TOC entry 3234 (class 2606 OID 35095)
-- Name: restaurants restaurants_utilisateurid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_utilisateurid_fkey FOREIGN KEY (utilisateurid) REFERENCES public.utilisateurs(id);


-- Completed on 2023-10-26 19:20:02

--
-- PostgreSQL database dump complete
--

