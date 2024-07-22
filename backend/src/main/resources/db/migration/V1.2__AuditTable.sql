CREATE TABLE team_schema.team_aud(
    id BIGINT,
    rev INTEGER,
    revtype SMALLINT,
    content VARCHAR(255),
    PRIMARY KEY (id, rev)
);
CREATE TABLE team_schema.revinfo(
    rev INTEGER PRIMARY KEY,
    revtstmp BIGINT
);
CREATE SEQUENCE revinfo_seq START WITH 1 INCREMENT BY 50;
