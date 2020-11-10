MEAN_Starter

A mean stack application with a ready to go backend and frontedn set up with a local authentication system using passport and JWT

###Backend
NodeJS+Express+Mongo

Passport is used for auth

Passwords are hashed ˆusing bcrypt and then stored in db

JWT tokens used for auth

An example of middleware to check if the request is authenticated can be seen in the routes/user.js as the isAuth() function
This function check if authorization header is present, if the token is valid it sets req.user to the decoded token

###Frontend

An auth guard is used to make sure a token is present before allowing any protected routes

#Components:
 - welcome - splash screen, no auth required to access
 - sign-up - sign up page
 - log-in - log in page which recieves a JWT token from backend once logged in, 
     -this token is stored as a cookie
     - token contains id and email
 - forgot-password
 - home - 