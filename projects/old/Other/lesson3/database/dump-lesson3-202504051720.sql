--
-- PostgreSQL database dump
--

-- Dumped from database version 16.5
-- Dumped by pg_dump version 16.5

-- Started on 2025-04-05 17:20:37

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
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4809 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16909)
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    client_id bigint NOT NULL,
    client_name character varying NOT NULL,
    client_number character varying NOT NULL,
    client_email character varying NOT NULL
);


ALTER TABLE public.client OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16908)
-- Name: client_client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.client_client_id_seq OWNER TO postgres;

--
-- TOC entry 4810 (class 0 OID 0)
-- Dependencies: 217
-- Name: client_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_client_id_seq OWNED BY public.client.client_id;


--
-- TOC entry 216 (class 1259 OID 16900)
-- Name: negrs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.negrs (
    negrs_id bigint NOT NULL,
    negrs_name character varying NOT NULL,
    negrs_post character varying NOT NULL,
    negrs_history character varying,
    negrs_age character varying NOT NULL
);


ALTER TABLE public.negrs OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16899)
-- Name: negrs_negrs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.negrs_negrs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.negrs_negrs_id_seq OWNER TO postgres;

--
-- TOC entry 4811 (class 0 OID 0)
-- Dependencies: 215
-- Name: negrs_negrs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.negrs_negrs_id_seq OWNED BY public.negrs.negrs_id;


--
-- TOC entry 220 (class 1259 OID 16918)
-- Name: purchases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchases (
    purchases_id bigint NOT NULL,
    purchases_client bigint NOT NULL,
    purchases_negr bigint NOT NULL,
    purchases_price character varying NOT NULL
);


ALTER TABLE public.purchases OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16917)
-- Name: purchases_purchases_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchases_purchases_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchases_purchases_id_seq OWNER TO postgres;

--
-- TOC entry 4812 (class 0 OID 0)
-- Dependencies: 219
-- Name: purchases_purchases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchases_purchases_id_seq OWNED BY public.purchases.purchases_id;


--
-- TOC entry 4645 (class 2604 OID 16912)
-- Name: client client_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client ALTER COLUMN client_id SET DEFAULT nextval('public.client_client_id_seq'::regclass);


--
-- TOC entry 4644 (class 2604 OID 16903)
-- Name: negrs negrs_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negrs ALTER COLUMN negrs_id SET DEFAULT nextval('public.negrs_negrs_id_seq'::regclass);


--
-- TOC entry 4646 (class 2604 OID 16921)
-- Name: purchases purchases_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchases ALTER COLUMN purchases_id SET DEFAULT nextval('public.purchases_purchases_id_seq'::regclass);


--
-- TOC entry 4801 (class 0 OID 16909)
-- Dependencies: 218
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.client VALUES (1, 'Дядя Баклажан', '+1-800-YOLO-SWAG', 'traplord@based.com');
INSERT INTO public.client VALUES (2, 'Королева Шишао', '+7-XXX-XXX-XX-XX', 'hookah_queen@dubai.ae');
INSERT INTO public.client VALUES (3, 'Григорий "Гусли"', '8-800-CHA-CHA-CHA', 'rus.trap@mail.ru');


--
-- TOC entry 4799 (class 0 OID 16900)
-- Dependencies: 216
-- Data for Name: negrs; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.negrs VALUES (1, 'Lil’ Banana', 'Главный бананокур', 'Был уличным поэтом в Атланте. Навык: рэп-баттлы с белочками', '25 dog years');
INSERT INTO public.negrs VALUES (2, 'MC Microwave', 'Диджей-полуночник', 'Экс-чемпион по поеданию арбузов за 5 минут. Тайная сила: танцы под техно', '30 в ритме буги-вуги');
INSERT INTO public.negrs VALUES (3, 'Sir Droptop', 'Король капотов', 'Украл 50 поршней и 1 розовый кадиллак. Девиз: "Моя шапочка — это fade"', 'Вечно 21');


--
-- TOC entry 4803 (class 0 OID 16918)
-- Dependencies: 220
-- Data for Name: purchases; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.purchases VALUES (1, 1, 3, '1000 биткоинов + чебурек');
INSERT INTO public.purchases VALUES (2, 2, 1, '3 золотых кальяна + подписка на OnlyFans');
INSERT INTO public.purchases VALUES (3, 3, 2, 'Бессмертный лукбук "Гоп-стоп мода 2025"');


--
-- TOC entry 4813 (class 0 OID 0)
-- Dependencies: 217
-- Name: client_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_client_id_seq', 1, false);


--
-- TOC entry 4814 (class 0 OID 0)
-- Dependencies: 215
-- Name: negrs_negrs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.negrs_negrs_id_seq', 1, false);


--
-- TOC entry 4815 (class 0 OID 0)
-- Dependencies: 219
-- Name: purchases_purchases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchases_purchases_id_seq', 1, false);


--
-- TOC entry 4650 (class 2606 OID 16916)
-- Name: client client_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pk PRIMARY KEY (client_id);


--
-- TOC entry 4648 (class 2606 OID 16907)
-- Name: negrs negrs_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.negrs
    ADD CONSTRAINT negrs_pk PRIMARY KEY (negrs_id);


--
-- TOC entry 4652 (class 2606 OID 16925)
-- Name: purchases purchases_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT purchases_pk PRIMARY KEY (purchases_id);


--
-- TOC entry 4653 (class 2606 OID 16926)
-- Name: purchases purchases_client_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT purchases_client_fk FOREIGN KEY (purchases_client) REFERENCES public.client(client_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4654 (class 2606 OID 16931)
-- Name: purchases purchases_negrs_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT purchases_negrs_fk FOREIGN KEY (purchases_negr) REFERENCES public.negrs(negrs_id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2025-04-05 17:20:37

--
-- PostgreSQL database dump complete
--

