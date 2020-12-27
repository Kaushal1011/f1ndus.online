create table posts(
    person_location Geometry not null,
    location_name String,
    description String,
    photo String,
    post_user String not null,
    type String,
    activefrom bigint,
    activeuntil bigint
);

SELECT
    PostGIS_Full_Version();
