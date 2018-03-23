1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
- middleware is a piece of software that allows other software to talk to each other, forming a bridge of sorts that isnt directly progrrammed into the other softwares. And example being a the code we inject before allowing a user to get the list of users, making sure they have a JWT in their header.

Sessions are a way to share data across multiple requests. You can use them to store and access user data within a cache, cookie, or database

bcrypt is a tool we use to handle passwords. It allows us to handle hashing as well as comparing.

JWT are tokens that we can use to prove authorization after a user has logged in by sending the token in the header, and using a HOC to check the token before allowing a user to move on to the next part of their HTTP request.

2.  What does bcrypt do in order to prevent attacks?
- it uses a user generated "salt" in order to make their hashing funtion incredibly hard to crack. Unless the salt is known, then an attack is pretty much prevented

1.  What are the three parts of the JSON Web Token?
-Header, which has what kind of token and the hashing algorithm, Payload, which contains registered, public, and/or private claims which hold data about the user or other metadata, and Signature, which is the encoded header, encoded payoad, a secret, and the algoritm specified in the header