# f1ndus.online
people are just more than employees, students, or performers. They are experiences! f1ndus.online!

[Live Version](http://www.fiind.us) : Cannot access your location because http blocks it, however your location will be set to somewhere in Gujarat,India for Demo Purposes

[Youtube Demo](https://www.youtube.com/watch?v=K1_abfXAOxk&t=1s)

[Devpost Submission](https://devpost.com/software/fiind-us)

## Inspiration

Tis the season to be jolly! And what do you do when you're jolly? you find other jolly people and enjoy your fun free holiday time with them. Our platform lets you find! We always see a lot of people like to perform or showcase whatever talent they have at public places or at their places of work, it's always so random, But what if it was not? You would get to meet these cool people not by change but at your will. The spark of inspiration for this app comes from our most basic funny idea that we wanted to build a Santa Claus finder :D, we build just that and much more!

## What it does

- It shows you cool people that are close by who are willing to share some cool experiences with you that you can enjoy and make the most of.
- It lets you list your location and what kind of experience that you're willing to provide to people today. This can be a street guitar performance, live cooking skills, pokemon go meetups, santa claus. 

## How we built it

The basic idea requires us to have users, locations, and cool people willing to provide experiences. All these elements can fit in a webapp. 

That's what we built we built a web app that uses cockroachdb, django, react, googlemapsapi, radar.io search API and many more. We tried to keep it as simple as possible for the average user to use.

Our backend has some basic django and cockraochdb raw SQL calls and our front ends uses the ever so simple and sleek material UI to keep everything looking clean.
 We have deployed our API on a google cloud VM instance and our frontend on github pages.

## Challenges we ran into

- Using cockroachdb took a lot of our time. Like a lot! lack of tutorials to use geodata with django. Geodjango had its own problems. We were planing to use ORM but we couldn't and had to use raw SQL queries, luckily we were competent enough with dbms systems to pull this out.
- Showcasing maps data on frontend in a way that looks clean and dealing with a lot apis is a bit difficult as we have to keep a track of a lot of stuff.


## Accomplishments that we're proud of

- We are proud of the fact that we have reached so far where we have almost completed what we seeked to build.
- We were also manage to use and integrate a lot of different technologies that we were previously unaware of such as radar.io, google cloud, geospatial data management in relational databases

## What we learned

- We learned to manage geolocation data with relational database and django. 
- We learned how to use material UI with react and display data on maps with react as well.
- We learned how to use radar.io API.
- We learned how to use VMS on google cloud.(I personally had worked with AWS EC2 before)
- We learned how to connect domain with github pages deployed 

## What's next for fiind.us

- We would like to take time polish our app and actually release at production level. A lot of our current stack is development based and not very safe. We would also like to improve location based filtering a bit. We didn't have time to do this as we spent most of it learning other technologies that we used.
- We have used default material UI themeing but we would like to improve the look of our overall webservice.
- We would also like to implement a more secure user system that protects our users from fake accounts and predators that may use our service for antisocial activities.

