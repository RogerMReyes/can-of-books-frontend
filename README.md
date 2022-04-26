# Can of Books 

**Author**: Roger Reyes and Kyle Honaker
**Version**: 1.0.0 

## Overview
This application sends out a query request to the backend server. On mount the home page will render a Carousel displaying information about the books taken from the cloud database.

## Getting Started
A user must set up the front and back end of their client and server and connect them using a GET request. They must also have a MongoDB database set up in order to write, store, and read information to the database.

## Architecture
The front end client will do a GET request to the server on Mount. The server will pull the information from the MongoDB and send it back to the client. The client will then check to see that the information has populated and insert the details into the Carousel.

## Change Log
Name of feature: #1 Carousel Creation

Estimate of time needed to complete: 1 hour

Start time: 4:05

Finish time: 6:00

Actual time needed to complete: _____

## Estimates
Name of feature: Lab 11

Estimate of time needed to complete: 4 hours

Start time: 4:00
Finish time: 6:15

Actual time needed to complete: 2 hours 15 min

## Credit and Collaborations
TA Adam Owada - Found issue with using https instead of http in .env