# Filmsfy Web
Example with AngularJS, MongoDB, Node.js and Express.
Designed with CSS3 with adaptave layout using media queries for display in a wide range of displays.
<h2>Installation</h2>
We need to install some packages for running our example properly.
For this example it's necessary download Node.js and MongoDB. Node is used for the main server and the MongoDB will be used for store all the data generated in the example (This install guide is for Mac).
<h3>Node.js</h3>
For download Node.js we just need go to their main page in https://nodejs.org/ and download the lastest package (we currently run with the v4.4.4 LTS version).
<h3>MongoDB</h3>
For download and install MongoDB we use HomeBrew with our Terminal app in Mac.
For download HomeBrew we need to write this line in our terminal prompt:

<ul>
  <li><i>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</i></li>
</ul>

Once the HomeBrew were installed, we just need to use it to download the MongoDB.
For download Mongo write in the terminal this few lines:

<ul>
  <li><i>sudo brew update</i></li>
  <li><i>sudo brew install mongodb</i></li>
</ul>

Once we installed the Mongo we need to create the "db" directory in our machine, put this lines in the terminal:
<ul>
  <li><i>sudo mkdir /data/db</i></li>
</ul>

<h2>Running the example</h2>
We open a shell prompt of the therminal and put mongod (if all the packages were installed successfully, mongo start to listen conections for the DB)
In other shell prompt we need to navigate with the terminal to our FilmsfyWeb project directory and install nodemon.
For the installation just put this lines
<ul>
  <li>sudo npm install -g nodemon</li>
</ul>
Later we put this command to make start our server listen connections:

<ul>
  <li>nodemon server.js localhost 8080</li>
</ul>

The server will start and start to listen.
For execute our example just write this line in your navigator URL: http://localhost:8080
