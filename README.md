# Super Galactic Age Calculator 
<img src="https://github.com/Dave-Sterry.png" width="200px" height="auto">

### A website by David Sterry updated on 11/6/2020

## Super Galactic Age Calculator

_This website will take a users inputted age and return how old the would be on 4 different planets. Mercury, Venus, Mars, and Jupiter. It also determines how long they have left to live in Earth years, on each planet according to their life expectancy. This was a Friday Independent Project for Epicodus to demonstrate knowledge of Javascript Environments and TDD_

The site can be viewed [here]( https://dave-sterry.github.io/Galactic-Age-Calculator/.)

## Setup Instructions
 User will need to have an up to date browser installed such as Chrome of Firefox. User will also need Node.js to run and install on a local machine. You can get Node [here](https://nodejs.org/en/) follow the instructions on the site for installation and set up. 
 # View online :
1. Using the browser navigate to the [gh-pages]( https://dave-sterry.github.io/Galactic-Age-Calculator/.) for this project
## Download via Github:
1. Alternatively use the browser navigate to my GitHub page [respository](https://github.com/Dave-Sterry/Galactic-Age-Calculator)
2. Click the Green **Code** button and select **Download Zip**
3. Unzip the downloaded folder
4. Open the _index.html_ file to view the site locally
## Clone from Github via Gitbash:
1. Clone this repo to your personal computer using "git clone (insertlink)
2. Next navigate to the directory on your computer with the same name, and open via VScode or other code editor of your choice
3. Run npm install in your terminal to set the project up.  
4.  Open index.html in your browser of choice. 
## How to use site
1. Input age
2. See how old you'd be on Mercury, Venus, Mars, Jupiter. And your life expectancy on each! 

## Known Bugs
 no known bugs at this time. 
## Specs
| Test | Input | Output |
|:-------------|:-------------------------| :--------------|
| Mercury Age Calculation |||  
| Should correctly calculate age on Mercury | 5yrs | "You are 1.2 years on on mercury" |  
| Venus Age Calculation |||  
| Should correctly calculate age on Venus | 5yrs | "You are 3.1 years old on Venus" |  
| Mars Age Calculation |||  
| Should correctly calculate age on Mars | 5yrs | "You are 9.4 years old on Mars" |  
| Venus Age Calculation |||  
| Should correctly calculate age on Venus | 5yrs | "You are 3.1 years old on Venus" |  
| Jupiter Age Calculation |||  
| Should correctly calculate age on Jupiter | 5yrs | "You are 59.3 years old on Jupiter |   
| Life Expectancy Calculation |||  
| Should return users life expectancy based on US gender averages | male | 76 |  
| Life Expectancy Planet Calculation |||  
| Should return users life expectancy on a given planet | 5 yrs, Mercury | "You have 73.8 years left to live" |  
| Should return amount lived past life expectancy | 20 years, Jupiter | "You lived 162.2 years past your life expectancy |    

Describe: mercYears()  
Test: "It returns users age on Mercury"   
Expect: mercYears(10).toEqual(41);  

Describe: venYears()  
Test: "It returns users age on Venus"   
Expect: mercYears(10).toEqual(16);  

Describe: marsYears()  
Test: "It returns users age on Mars"  
Expect: mercYears(10).toEqual(5);  

Describe: jupYears()  
Test: "It returns users age on Jupiter"  
Expect: mercYears(10).toEqual(0);  

Describe: lifeExpect()  
Test: "It returns user life expectancy in the US based on gender"  
Expect: lifeExpect(male).toEqual(76);  

Describe: mercLife()  
Test: "It returns the users lifec expectancy on Mercury in Earth years"  
Expect: mercLife(10).toEqual(295);  

Describe: venLife()  
Test: "It returns the users lifec expectancy on Venus in Earth years"  
Expect: mercLife(10).toEqual(114);  

Describe: marsLife()  
Test: "It returns the users lifec expectancy on Mars in Earth years"  
Expect: mercLife(10).toEqual(37);  

Describe: mercLife()  
Test: "It returns the users lifec expectancy on Jupiter in Earth years"  
Expect: mercLife(10).toEqual(0);  

## Contact and Support details

_Please contact me at sterry.david@gmail.com in regards to this website_

## Techknowlogies Used

* HTML
* CSS
* Git
* Bootstrap
* Visual Studios Code
* jQuery and Javascript
* npm
* Jest
* Babel
* webpack


# License

This project is licensed under **MIT 2.0**

Copyright (c) 2020 **David Sterry**