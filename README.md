News Blog

Getting Started
 1 Clone the repository.
 2 cd api 
 3 npm i 
 4 open new terminal
 6 cd client
 7 npm i
 8 put npm run dev in two terminal.
 10 Access the website at https://news-blog-47n1.onrender.com/sign-in

Аdmin panel (important)
login amangeldiuly.miras@bk.ru
password 0303

"News Blog: My News, Your News" is an interactive platform that unites personal and public spheres of life. Here you will find the latest news from various fields, and you can also share your own events and opinions. With the ability to comment and like, we create a space for active communication and information exchange, making each user a part of a global dialogue.

API Services
API services that were used:
 • news cnn api: show news 
 • news health api show news about health

Route Structure
 • /: Main page that handles GET request were you need to choose a city.

Express Server (app.js)
Express.js is used for handling the server, running on port 3000 (const port = 3000;).

Integration of NPM Packages
Seven npm packages related to the project topic are integrated into the root JavaScript file:
 • axios
 • cors
 • express
 • nodemon
 • bcrypt
   dotenv
   mongoose
   jsonwebtoken
