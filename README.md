# EmployeeSummary
    
## Description 
    
Employee Summary is a Node.JS small app that helps in quickly building a team roaster. 

It provides a template in which the user answers the questions in the terminal in order to automatically generate an HTML page containing the team basic info. 

The app builds classes for specific types of employees named _Manager_, _Engineer_ and _Intern_. Each class has characteristic attributes and methods by which `extends` the parent class _Employee_. All the tests in _test_ repo validate the correct structure needed for each class. 

The structure allows for multiple team members to be added, each with the relevant info, while the app features email validation and doesn't let the user to skip questions or not to provide all the required data.

After the user answers the terminal questions, the app uses placeholders to pass the information in the HTML files in _templates_ repo and dynamically generates the final _team.html_ in newly created _output_ repo. 
    

## Table of Contents
    
[Description](#description)
    
[Installation](#installation)
    
[Usage](#usage)
    
[Tests](#tests)
    
[Contribution](#contribution)
    
[License](#badgeURL)
    
[Author](#name)
    
[Contact](#contact)
    

## Installation
    
This Employee Summary app uses Node.JS environment and  _inquirer_,  _jest_ and _boxen_ dependencies.

One has to install Node.JS by running the terminal command `npm install` in the specific repository, followed by each dependency installation with `npm i inquirer`, `npm i jest` and `npm i boxen` commands.
    

## Usage
    
Fork && clone the repo. 

After setup, run terminal command `node app.js`;

Provide required information to build _team.html_ file in folder named _output_.

Open the _team.html_ in your favourite browser.

Demo: 



    

## Tests
    
Passes all the tests in _test_:

- Employee.test.js
- Manager.test.js
- Engineer.test.js
- Intern.test.js
    

## Contribution

Pull requests || reformatting || bugs addressing is welcome. 

Please [create an issue](https://github.com/drg0drg/ReadMeGenerator/issues).
    

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    

https://opensource.org/licenses/MIT
    

## Author
    

 Name: Dragos Dragomir
    

 GitHub: drg0drg
    

 ![Alt Text](https://avatars1.githubusercontent.com/u/60710786?v=4)
    

## Contact
dragomir_costin_dragos@yahoo.com