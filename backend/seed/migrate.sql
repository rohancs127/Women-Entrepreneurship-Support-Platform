DROP TABLE IF EXISTS MENTOR;
DROP TABLE IF EXISTS ENTREPRENEUR;
DROP TABLE IF EXISTS ORGANISATION;
DROP TABLE IF EXISTS INVESTS;

CREATE TABLE MENTOR( mentor_id varchar(5) primary key, mentor_Name varchar(50) not null, email varchar(50) not null, phone varchar(10) not null, domain varchar(50) not null );

CREATE TABLE ENTREPRENEUR ( ent_id varchar(5) primary key, ent_name varchar(50), mentor_id varchar(50) references mentor(mentor_id) on delete set null, email varchar(50) not null, phone varchar(10) not null, business varchar(50) not null, city varchar(50), state varchar(50) not null, country varchar(50) not null );

CREATE TABLE ORGANISATION( org_id varchar(5) primary key, org_Name varchar(30) not null, email varchar(50) not null, phone varchar(10) not null);

CREATE TABLE INVESTS(inv_id varchar(5), ent_id varchar(5) references entrepreneur(ent_id), org_id varchar(5) references organisation(org_id), amount int, date date);


-- Inserting Data to the table
INSERT INTO MENTOR (mentor_id, mentor_name, email, phone, domain) VALUES ('M001', 'John Doe', 'johndoe@gmail.com', '9876512345', 'Startup Consulting');
INSERT INTO MENTOR (mentor_id, mentor_name, email, phone, domain) VALUES ('M002', 'Jane Smith', 'janesmith12@gmail.com', '9345678903', 'Business Incubation');
INSERT INTO MENTOR (mentor_id, mentor_name, email, phone, domain) VALUES ('M003', 'Michael Johnson', 'michaelj235@gmail.com', '8765435565','Entrepreneurial Finance');
INSERT INTO MENTOR (mentor_id, mentor_name, email, phone, domain) VALUES ('M004', 'Emily Williams', 'emilywilliams@gmail.com', '9001234533','Marketing Strategy');
INSERT INTO MENTOR (mentor_id, mentor_name, email, phone, domain) VALUES ('M005', 'David Brown', 'davidb1987@gmail.com', '7734512324','Product Development');


INSERT INTO ENTREPRENEUR (ent_id, ent_name, mentor_id, email, phone, business, city, state, country) VALUES ('E001', 'Rakshitha Kumari', 'M002', 'rakshithak@gmail.com', '8971234456', 'Tech Startup', 'New York', 'NY', 'USA');
INSERT INTO ENTREPRENEUR (ent_id, ent_name, mentor_id, email, phone, business, city, state, country) VALUES ('E002', 'Meenakshi Dalreja', 'M004', 'meenadalreja84@gmail.com', '8341567890', 'E-commerce', 'San Francisco', 'CA', 'USA');
INSERT INTO ENTREPRENEUR (ent_id, ent_name, mentor_id, email, phone, business, city, state, country) VALUES ('E004', 'Melonica Brags', 'M004', 'melonica23@gmail.com', '9971234484', 'Food Truck', 'Tokyo', 'Tokyo', 'Japan');
INSERT INTO ENTREPRENEUR (ent_id, ent_name, mentor_id, email, phone, business, city, state, country) VALUES ('E005', 'Jade Miyoni', 'M005', 'jademiyoni@gmail.com', '8856428954', 'Fashion Boutique', 'Paris', 'Paris', 'France');


INSERT INTO organisation (org_id, org_name, email, phone) VALUES ('C001', 'Tech Ventures', 'techventures@gmail.com', '8971567890');
INSERT INTO organisation (org_id, org_name, email, phone) VALUES ('C002', 'Investor Group', 'investorgroup@yahoo.com', '9223678901');
INSERT INTO organisation (org_id, org_name, email, phone) VALUES ('C003', 'Startup Funders', 'startupfunders@yahoo.com', '9543789012');
INSERT INTO organisation (org_id, org_name, email, phone) VALUES ('C004', 'Entrepreneurial Angels', 'entrepreneurialangels@gmail.com', '8765890123');
INSERT INTO organisation (org_id, org_name, email, phone) VALUES ('C005', 'Innovation Capital', 'innovationcapital@yahoo.com', '7998901234');



INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV01', 'E001', 'C002', 50000, '2024-01-15');
INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV02', 'E002', 'C002', 75000, '2024-02-20');

INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV03', 'E003', 'C003', 100000, '2024-03-05');
INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV04', 'E004', 'C001', 60000, '2024-01-30');
INSERT INTO INVESTS (inv_id, ent_id,org_id, amount, date) VALUES ('INV05', 'E005', 'C004', 90000, '2024-02-10');

