create table posts(
    person_location Geometry,
    description String,
    photo String,
    post_user String,
    rowid Serial
);

SELECT PostGIS_Full_Version();