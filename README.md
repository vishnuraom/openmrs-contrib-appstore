# openmrs-contrib-appstore
Description:

#Setting Up

1.Install stable version of Node.js from https://nodejs.org/en/download/.
Node Pacakage Manager(npm) comes bundled with Node.js

2.Install bower
```
$ npm install -g bower
```

3.Clone the repo
```
$ git clone https://github.com/vishnuraom/openmrs-contrib-appstore.git
```

4.Go to the project folder and install dependencies
```
$ bower install
```

5.
(a)Start the server after installing any npm pacakage like https://www.npmjs.com/package/http-server
```
$ npm install http-server -g
$ http-server -a localhost -p 8000
```
    (or)
(b)If you have python installed, you can run these commands from you project directory to start server
```
$ python -m SimpleHTTPServer <port#>  (On Mac)
$ python -m http.server <port#>  (On Windows)
```

#Contribute

1.
(a)If you want to use any new element from the element catalog
![image](http://res.cloudinary.com/dx1h6ttme/image/upload/v1464806848/Screenshot_416_igdrnx.png)

(b)We can also select multiple elements by using "Add to my collection" option above Bower command, after selecting multiple elements press on the star icon on top right corner.
Bower commands to install multiple elements will be generated
![image](http://res.cloudinary.com/dx1h6ttme/image/upload/v1464807683/Screenshot_418_sfchpt.png)

2.Make changes in required files, reload the browser to verify the changes.

3.Create a pull request.
