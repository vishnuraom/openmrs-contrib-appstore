# openmrs-contrib-appstore

### Content Table

- [Description](#description)
- [Setting Up](#setting-up)
- [Code Structure](#code-structure)
- [Contribute](#contribute)
- [External Links](#external-links)

###Description:

This project is a part of Google Summer of Code 2016 under the organization OpenMRS.
The OpenMRS community has agreed to use Bintray as its distribution platform(relevant discussion can be found [here](https://talk.openmrs.org/t/bintray-better-method-of-distributing-apps/5606).) and the aim of this project is to develop a web application where end users can browse and download OpenMRS packages hosted on [Bintray](https://bintray.com) using the [Bintray REST API](https://bintray.com/docs/api/).

###Setting Up

1.Set up [openmrs-appstore-httpclient](https://github.com/vishnuraom/openmrs-appstore-httpclient#setting-up)

2.Install bower

```
$ npm install -g bower
```

3.Clone the repo

```
$ git clone https://github.com/vishnuraom/openmrs-contrib-appstore.git
$ cd openmrs-contrib-appstore
```

4.Install dependencies

```
$ npm install && bower install
```

5.Start the server
(a)for unvulcanized app
```
$ cd app
$ serve -p 8000
```

(b)for vulcanized app
```
$ gulp & gulp serve
```

6.Go to [http://localhost:8000](http://localhost:8000)
 
###Code Structure:

<table>
 <tr>
  <td>app/</td>
  <td>All the files related to the app</td>
 </tr>
 <tr>
  <td>app/index.html</td>
  <td>Entry point of the app</td>
 </tr>
 <tr>
  <td>app/sw-import.js</td>
  <td>Requirement for <a href="https://github.com/PolymerElements/platinum-sw#top-level-sw-importjs">service-worker</a> </td>
 </tr> 
 <tr>
  <td>dist</td>
  <td>Contains the vulcanized version of the app.'dist' folder is created after running the gulp command</td>
 </tr>
 <tr>
  <td>node_modules</td>
  <td>The node_modules directory contains build tools like gulp </td>
 </tr>
 <tr>
  <td>.bowerrc</td>
  <td>Used to setup default install path for bower_components </td>
 </tr>
 <tr>
  <td>bower.json</td>
  <td>Manifest file used to manage project dependencies</td>
 </tr>
 <tr>
  <td>gulpfile.js</td>
  <td>A gulpfile is a file that will act as a manifest to define our tasks.</td>
 </tr>
 <tr>
  <td>package.json</td>
  <td>Manifest file used to manage project dependencies.</td>
 </tr>
 <tr>
  <td>wct.conf</td>
  <td>Web Component Tester configuration file.</td>
 </tr>
</table>

###Contribute

1.Clone the repo

2.Make changes in required files, reload the browser to verify the changes.

3.Create a pull request.

###External Links
- [Polymer Element Catalog](https://elements.polymer-project.org/)    
- [star-rating](https://customelements.io/cmartinezv/star-rating/)
- [gulp-vulcanize](https://www.npmjs.com/package/gulp-vulcanize)
- [polylint](https://www.npmjs.com/package/polylint)
- [web-component-tester](https://www.npmjs.com/package/web-component-tester)