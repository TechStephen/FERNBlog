# FERNBlog
Blog written using Firebase, Express, React, and Node

LINKED WITH A PERSONAL DATABASE OF MINE AS I DON'T KNOW IF I'LL HAVE ACCESS TO METHOD'S AFTER THIS WEEK

Make sure if you want to run to: 
  1.) call 'npm start' outside of client folder to run backend
  2.) call a seperate instance of 'npm start' inside our client folder to run our frontend react app (they run on different port but ref each other)
  
Didnt get much further than a single data instance being added on call, next steps were to explore these solutions:

  Q1.) How can we create docs for each post and call them all?

  Potential Solution:
    For each snapshot loop goes through all docs and displays all data to state (q2)

  Q2.) How can we display all our data onto different state objects?

  Potential Solution:
    Create an empty state array for all posts, each array val is null by default -
    Loop through state array and assign array vals to snapshot loop data (async)
