create table votazioni (
    id_risposta integer primary key,
    nome_risposta varchar(50) not null,
    contatore integer not null check(contatore >= 0)
)

insert into votazioni values (1, "Reggae", 0);
insert into votazioni values (2, "R&B", 0);
insert into votazioni values (3, "Country", 0);
insert into votazioni values (4, "Edm", 0);
insert into votazioni values (5, "Blues", 0);
insert into votazioni values (6, "Rock", 0);
insert into votazioni values (7, "Jazz", 0);
insert into votazioni values (8, "Hip-Hop", 0);

update votazioni set contatore = contatore + 1
where id_risposta = 3;
