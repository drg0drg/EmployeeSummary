const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");
//Function that takes in the employees array an the teamName and returns html content as string
const render = (employees, teamName) => {
  const html = [];
  //Block to filter the managers and map them
  //The map uses renderManager function to replace the placeholders with user input
  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  //Block to filter the engineers and map them
  //The map uses renderEngineer function to replace the placeholders with user input
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  //Block to filter the interns and map them
  //The map uses renderIntern function to replace the placeholders with user input
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""), teamName);

};
//Function to read the <manager.html> file and replace all the placeholders with corresponding values
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};
//Function to read the <engineer.html> file and replace all the placeholders with corresponding values
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};
//Function to read the <intern.html> file and replace all the placeholders with corresponding values
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};
//Function to replace the <{{ teamName }}> and <{{ team }}> placeholders with user's input in <main.html> file
const renderMain = (html, teamName) => {
  //Declare an empty array variable
  var htmlFinal = [];
  //Read the <main.html> file
  var template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  //Feed <teamName> value to <{{ teamName }}> placeholders and pass the result to <htmlFinal> variable
  htmlFinal = replacePlaceholders(template, "teamName", teamName);
  //Having t<{{ teamName }}> already replaced, feeds the <team.html> to the <{{ team }}> placeholder and pass result to <htmlFinal>
  htmlFinal = replacePlaceholders(htmlFinal, "team", html);
  return htmlFinal;
};
//function to define a placeholder pattern using RegExp and to replace it by the characteristic <value>
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;

