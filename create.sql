create schema agro;

create table agro.cultura (
  nome text PRIMARY KEY,
  dias_cultivo text NOT NULL
);

create table agro.regiao (
  nome text PRIMARY KEY
);

insert into agro.regiao values ('sul');
insert into agro.regiao values ('sudeste');
insert into agro.regiao values ('nordeste');
insert into agro.regiao values ('centro-oeste');
insert into agro.regiao values ('norte');

create table agro.cultura_regiao (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cultura text REFERENCES agro.cultura (nome) NOT NULL,
  regiao text REFERENCES agro.regiao (nome) NOT NULL,
  epoca_plantio text NOT NULL
);