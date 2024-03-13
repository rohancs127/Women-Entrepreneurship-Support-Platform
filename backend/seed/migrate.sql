DROP TABLE IF EXISTS MENTOR;
DROP TABLE IF EXISTS ENTREPRENEUR;
DROP TABLE IF EXISTS ORGANISATION;
DROP TABLE IF EXISTS INVESTS;

CREATE TABLE MENTOR( mentor_id varchar(5) primary key, mentor_Name varchar(20) not null, domain varchar(20) not null );

CREATE TABLE ENTREPRENEUR ( ent_id varchar(5) primary key,mentor_id varchar(20) references mentor(mentor_id) on delete set null, business varchar(20) not null, city varchar(20), state varchar(20) not null, country varchar(20) not null );

CREATE TABLE ORGANISATION( org_id varchar(5) primary key, org_Name varchar(30) not null);

CREATE TABLE INVESTS(inv_id varchar(5), ent_id varchar(5) references entrepreneur(ent_id), org_id varchar(5) references organisation(org_id), amount int, date date);


-- Inserting Data to the table
INSERT INTO MENTOR (mentor_id, mentor_name, domain) VALUES ('M001', 'John Doe', 'Startup Consulting');
INSERT INTO MENTOR (mentor_id, mentor_name, domain) VALUES ('M002', 'Jane Smith', 'Business Incubation');
INSERT INTO MENTOR (mentor_id, mentor_name, domain) VALUES ('M003', 'Michael Johnson', 'Entrepreneurial Finance');
INSERT INTO MENTOR (mentor_id, mentor_name, domain) VALUES ('M004', 'Emily Williams', 'Marketing Strategy');
INSERT INTO MENTOR (mentor_id, mentor_name, domain) VALUES ('M005', 'David Brown', 'Product Development');


INSERT INTO ENTREPRENEUR (ent_id, mentor_id, business, city, state, country) VALUES ('E001', 'M002', 'Tech Startup', 'New York', 'NY', 'USA');
INSERT INTO ENTREPRENEUR (ent_id, mentor_id, business, city, state, country) VALUES ('E002', 'M004', 'E-commerce', 'San Francisco', 'CA', 'USA');
INSERT INTO ENTREPRENEUR (ent_id, mentor_id, business, city, state, country) VALUES ('E004', 'M004', 'Food Truck', 'Tokyo', 'Tokyo', 'Japan');
INSERT INTO ENTREPRENEUR (ent_id, mentor_id, business, city, state, country) VALUES ('E005', 'M005', 'Fashion Boutique', 'Paris', 'Paris', 'France');


INSERT INTO ORGANISATION (org_id, org_name) VALUES ('C001', 'VenturePro');
INSERT INTO ORGANISATION (org_id, org_name) VALUES ('C002', 'Capital Partners');
INSERT INTO ORGANISATION (org_id, org_name) VALUES ('C003', 'Startup Investors Ltd.');
INSERT INTO ORGANISATION (org_id, org_name) VALUES ('C004', 'Angel Investment Group');
INSERT INTO ORGANISATION (org_id, org_name) VALUES ('C005', 'Innovation Capital Corp.');


INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV01', 'E001', 'C002', 50000, '2024-01-15');
INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV02', 'E002', 'C002', 75000, '2024-02-20');
INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV03', 'E003', 'C003', 100000, '2024-03-05');
INSERT INTO INVESTS (inv_id, ent_id, org_id, amount, date) VALUES ('INV04', 'E004', 'C001', 60000, '2024-01-30');
INSERT INTO INVESTS (inv_id, ent_id,org_id, amount, date) VALUES ('INV05', 'E005', 'C004', 90000, '2024-02-10');

