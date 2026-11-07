--
-- PostgreSQL database dump
--

-- Dumped from database version 16.5
-- Dumped by pg_dump version 16.5

-- Started on 2025-04-05 16:57:02

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
-- TOC entry 4818 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16868)
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    client_id bigint NOT NULL,
    client_name character varying NOT NULL,
    client_num character varying NOT NULL,
    client_email character varying NOT NULL
);


ALTER TABLE public.client OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16867)
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
-- TOC entry 4819 (class 0 OID 0)
-- Dependencies: 219
-- Name: client_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_client_id_seq OWNED BY public.client.client_id;


--
-- TOC entry 222 (class 1259 OID 16877)
-- Name: cpp_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cpp_order (
    cpp_order_id bigint NOT NULL,
    cpp_order_client bigint NOT NULL,
    cpp_order_product bigint NOT NULL,
    cpp_order_provider bigint NOT NULL,
    cpp_order_price character varying NOT NULL
);


ALTER TABLE public.cpp_order OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16876)
-- Name: cpp_order_cpp_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cpp_order_cpp_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cpp_order_cpp_order_id_seq OWNER TO postgres;

--
-- TOC entry 4820 (class 0 OID 0)
-- Dependencies: 221
-- Name: cpp_order_cpp_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cpp_order_cpp_order_id_seq OWNED BY public.cpp_order.cpp_order_id;


--
-- TOC entry 216 (class 1259 OID 16850)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    product_id bigint NOT NULL,
    product_name character varying NOT NULL,
    product_description text
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16849)
-- Name: product_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_product_id_seq OWNER TO postgres;

--
-- TOC entry 4821 (class 0 OID 0)
-- Dependencies: 215
-- Name: product_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;


--
-- TOC entry 218 (class 1259 OID 16859)
-- Name: provider; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provider (
    provider_id bigint NOT NULL,
    provider_name character varying NOT NULL,
    provider_num character varying NOT NULL,
    provider_email character varying NOT NULL
);


ALTER TABLE public.provider OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16858)
-- Name: provider_provider_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provider_provider_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.provider_provider_id_seq OWNER TO postgres;

--
-- TOC entry 4822 (class 0 OID 0)
-- Dependencies: 217
-- Name: provider_provider_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provider_provider_id_seq OWNED BY public.provider.provider_id;


--
-- TOC entry 4651 (class 2604 OID 16871)
-- Name: client client_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client ALTER COLUMN client_id SET DEFAULT nextval('public.client_client_id_seq'::regclass);


--
-- TOC entry 4652 (class 2604 OID 16880)
-- Name: cpp_order cpp_order_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpp_order ALTER COLUMN cpp_order_id SET DEFAULT nextval('public.cpp_order_cpp_order_id_seq'::regclass);


--
-- TOC entry 4649 (class 2604 OID 16853)
-- Name: product product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);


--
-- TOC entry 4650 (class 2604 OID 16862)
-- Name: provider provider_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provider ALTER COLUMN provider_id SET DEFAULT nextval('public.provider_provider_id_seq'::regclass);


--
-- TOC entry 4810 (class 0 OID 16868)
-- Dependencies: 220
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.client VALUES (1, 'Мастурбек', '89345678955', 'masturbek@mail.ru');
INSERT INTO public.client VALUES (2, 'Даун', '89445676534', 'ebal@pohuy.com');
INSERT INTO public.client VALUES (3, 'ЯЕбал', '89424543567', 'otsosoal@mail.ru');
INSERT INTO public.client VALUES (4, 'Еблище', '89546465425', 'sdox@pihuy.com');


--
-- TOC entry 4812 (class 0 OID 16877)
-- Dependencies: 222
-- Data for Name: cpp_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cpp_order VALUES (1, 4, 1, 2, '100');
INSERT INTO public.cpp_order VALUES (2, 2, 3, 1, '1245');
INSERT INTO public.cpp_order VALUES (3, 2, 1, 3, '42345');


--
-- TOC entry 4806 (class 0 OID 16850)
-- Dependencies: 216
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product VALUES (1, 'Говновоз', 'Возит говно');
INSERT INTO public.product VALUES (2, 'Пила', 'Пила пилить детей)))');
INSERT INTO public.product VALUES (3, 'Буба', 'Он тут по приколу');


--
-- TOC entry 4808 (class 0 OID 16859)
-- Dependencies: 218
-- Data for Name: provider; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provider VALUES (1, 'КакастройУзбек', '88005553535', 'nasralgovnom@gmail.com');
INSERT INTO public.provider VALUES (2, 'ИвандристСпок', '89234345667', 'vanyanahuy@sral.ru');
INSERT INTO public.provider VALUES (3, 'МнеПохуй', '85466436576', 'poebat@mail.ru');


--
-- TOC entry 4823 (class 0 OID 0)
-- Dependencies: 219
-- Name: client_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_client_id_seq', 4, true);


--
-- TOC entry 4824 (class 0 OID 0)
-- Dependencies: 221
-- Name: cpp_order_cpp_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cpp_order_cpp_order_id_seq', 3, true);


--
-- TOC entry 4825 (class 0 OID 0)
-- Dependencies: 215
-- Name: product_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_product_id_seq', 3, true);


--
-- TOC entry 4826 (class 0 OID 0)
-- Dependencies: 217
-- Name: provider_provider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_provider_id_seq', 3, true);


--
-- TOC entry 4658 (class 2606 OID 16875)
-- Name: client client_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pk PRIMARY KEY (client_id);


--
-- TOC entry 4654 (class 2606 OID 16857)
-- Name: product product_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (product_id);


--
-- TOC entry 4656 (class 2606 OID 16866)
-- Name: provider provider_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provider
    ADD CONSTRAINT provider_pk PRIMARY KEY (provider_id);


--
-- TOC entry 4659 (class 2606 OID 16883)
-- Name: cpp_order cpp_order_client_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpp_order
    ADD CONSTRAINT cpp_order_client_fk FOREIGN KEY (cpp_order_client) REFERENCES public.client(client_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4660 (class 2606 OID 16888)
-- Name: cpp_order cpp_order_product_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpp_order
    ADD CONSTRAINT cpp_order_product_fk FOREIGN KEY (cpp_order_product) REFERENCES public.product(product_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4661 (class 2606 OID 16893)
-- Name: cpp_order cpp_order_provider_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cpp_order
    ADD CONSTRAINT cpp_order_provider_fk FOREIGN KEY (cpp_order_provider) REFERENCES public.provider(provider_id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2025-04-05 16:57:02

--
-- PostgreSQL database dump complete
--

