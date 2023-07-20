create sequence "public"."countries_id_seq";

create table "public"."countries" (
    "id" integer not null default nextval('countries_id_seq'::regclass),
    "name" text not null
);


alter sequence "public"."countries_id_seq" owned by "public"."countries"."id";

CREATE UNIQUE INDEX countries_pkey ON public.countries USING btree (id);

alter table "public"."countries" add constraint "countries_pkey" PRIMARY KEY using index "countries_pkey";


