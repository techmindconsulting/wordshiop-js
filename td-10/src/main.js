import Manager from "./Manager.js";
import Developer from "./Developer.js";
import SalesPerson from "./SalesPerson.js";
import TableLoader from "./TableLoader.js";

// Question 2
let salesPersons = [];
let salesPersonl = new SalesPerson("John Doe 1", "john.doe1@yopmail.com", "sales");
salesPersonl.addSkill("Information Management");
salesPersonl.addSkill("Persuasive Communication");
salesPersonl.setProjects(["Artificial Intelligence", "Virtual Reality"]);
salesPersons.push(salesPersonl);

let salesPerson2 = new SalesPerson("John Doe 2", "john.doe2@yopmail.com", "sales");
salesPerson2.addSkill("Research and Planning");
salesPerson2.addSkill("Problem-Solving");
salesPerson2.setProjects(["Artificial Intelligence", "Video Compensation"]);
salesPersons.push(salesPerson2);

let salesPerson3 = new SalesPerson("John Doe 3", "john.doe3@yopmail.com", "sales");
salesPerson3.addSkill("Research and Planning");
salesPerson3.addSkill("Problem-Solving");
salesPerson3.addSkill("Information Management");
salesPerson3.addSkill("Persuasive Communication");
salesPerson3.setProjects(["Satellite Wi-Fi"]);
salesPerson3.addProject("Mentorship Platform");
salesPersons.push(salesPerson3);

let developers = [];

let developer1 = new Developer("Marc Lee 1", "marc.lee1@yopmail.com", "software engineering");
developer1.setProjects(["Video Compensation", "Artificial Intelligence"]);
developer1.addSkill("PHP");
developer1.addSkill("MYSQL");
developer1.addSkill("Symfony");
developer1.addSkill("JS");
developer1.addSkill("HTML");
developer1.addSkill("CSS");
developers.push(developer1);

let developer2 = new Developer("Marc Lee 2", "marc.lee2@yopmail.com", "software engineering");
developer2.setProjects(["Virtual Reality", "Artificial Intelligence"]);
developer2.addSkill("Python");
developer2.addSkill("C");
developer2.addSkill("C++");
developer2.addSkill("MongoDB");
developer2.addSkill("JS");
developer2.addSkill("HTML");
developer2.addSkill("CSS");
developers.push(developer2);

let developer3 = new Developer("Marc Lee 3", "marc.lee3@yopmail.com", "software engineering");
developer3.setProjects(["Satellite Wi-Fi", "Virtual Reality"]);
developer3.addSkill("JAVA");
developer3.addSkill("J2EE");
developer3.addSkill("Oracle");
developers.push(developer3);

let developer4 = new Developer("Marc Lee 4", "marc.lee4@yopmail.com", "software engineering");
developer4.setProjects(["Video Compensation", "Artificial Intelligence"]);
developer4.addSkill("Android");
developer4.addSkill("Kotlin");
developer4.addSkill("JAVA");
developers.push(developer4);

let developer5 = new Developer("Marc Lee 5", "marc.lee5@yopmail.com", "software engineering");
developer5.setProjects(["Satellite Wi-Fi", "Artificial Intelligence"]);
developer5.addSkill("Swift");
developer5.addSkill("Objective C");
developer5.addSkill("IOS");
developers.push(developer5);

// Question 3
let lookingForDevelopers = developers.filter((developer) => {
    return developer.skills.includes("PHP") || developer.skills.includes("JS") || developer.skills.includes("C");
});

// Question 4
function getBonusByProject(project) {
    let bonusByProject = [
        { project: "Video Compensation", bonus: 1000 },
        { project: "Artificial Intelligence", bonus: 2500 },
        { project: "Virtual Reality", bonus: 2000 },
        { project: "Satellite Wi-Fi", bonus: 2300 },
        { project: "Mentorship Platform", bonus: 500 },
    ];
    let data = bonusByProject.filter((obj) => obj.project === project).shift();
    if (typeof data !== "undefined") {
        return data.bonus;
    }
    return 0;
}

salesPersons.sort((salesPerson1, salesPerson2) => {
    return salesPerson1.bonus > salesPerson2.bonus ? -1 : 1;
});

console.log(`${salesPersons[0].fullname} a le plus gros bonus avec ${salesPersons[0].bonus} €`);

// Question 5
let manager = new Manager("Zak Storm", "zak.storm@yopmail.com");
manager.addEmployees([...salesPersons, ...developers]);
console.log(manager);

let manager2 = new Manager("Sylver Storm", "sylver.storm@yopmail.com");

let developer6 = new Developer("Marc Lee 6", "marc.lee6@yopmail.com", "software engineering");
developer6.setProjects(["Video Compensation", "Artificial Intelligence"]);
developer6.addSkill("Android");
developer6.addSkill("Kotlin");
developer6.addSkill("JAVA");

let salesPerson4 = new SalesPerson("John Doe 4", "john.doe4@yopmail.com", "sales");
salesPerson4.addSkill("Research and Planning");
salesPerson4.addSkill("Problem-Solving");
salesPerson4.setProjects(["Artificial Intelligence", "Video Compensation"]);

const workers = [];
if (!developer6.hasManager()) {
    workers.push(developer6);
}

if (!salesPerson4.hasManager()) {
    workers.push(salesPerson4);
}
manager2.addEmployees(workers);
console.log(manager2);

// Question 6
let tableEmployee1 = document.getElementById("employee-1");
let tableEmployee2 = document.getElementById("employee-2");
let caption1 = document.getElementById("manager-1");
let caption2 = document.getElementById("manager-2");
caption1.textContent = `Manager ${manager.fullname}`;
caption2.textContent = `Manager ${manager2.fullname}`;

TableLoader.loadFrom(manager, tableEmployee1);
TableLoader.loadFrom(manager2, tableEmployee2);
