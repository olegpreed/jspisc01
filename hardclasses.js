//classes!
class Company {
  constructor(companyName, currentProjects, completedProjects, staff) {
    this.companyName = companyName;
    this.currentProjects = currentProjects;
    for (let i = 0; i < currentProjects.length; i++) {
      currentProjects[i].completeProject.bind(this);
    }
    this.completedProjects = completedProjects;
    this.staff = staff;
  }
  addNewCompanyMember(newmember) {
    if (newmember.constructor.name == "FrontendDeveloper")
      this.staff.frontend.push;
    else if (newmember.constructor.name == "BackendDeveloper")
      this.staff.backend.push;
    else if (newmember.constructor.name == "Manager") this.staff.managers.push;
  }
  addProject(Project) {
    this.currentProjects.push(Project);
  }
  getMembersQuantity() {
    console.log(
      this.staff.managers.size +
        this.staff.developers.frontend.size +
        this.staff.developers.backend.size
    );
  }
}

class Project {
  constructor(projectName, minQualification, Team) {
    this.projectName = projectName;
    this.minQualification = minQualification;
    this.Team = Team;
  }
  completeProject() {
    this.completedProjects.push(projectName);
    this.currenProjects.filter(function (e) {
      return e !== projectName;
    });
  }
  addNewProjectMember() {
    if (newmember.constructor.name == "FrontendDeveloper")
      this.Team.frontend.push;
    else if (newmember.constructor.name == "BackendDeveloper")
      this.Team.backend.push;
    else if (newmember.constructor.name == "Manager") this.Team.managers.push;
  }
}
class Employee {
  constructor(name, grade, skills, company) {
    this.name = name;
    this.grade = grade;
    this.skills = skills;
    this.company = company;
  }
  changecompany(newCompanyName) {
    this.company = newCompanyName;
  }
  upGrade() {
    if (this.grade === "L1") this.grade = "L2";
    else if (this.grade === "L2") this.grade = "L3";
    else if (this.grade === "L3") this.grade = "L4";
  }
  addSkill(newSkillName) {
    this.skills.push(newSkillName);
  }
}
class FrontendDeveloper extends Employee {
  constructor(name, grade, skills, company, stack, projectQuantity) {
    super(name, grade, skills, company);
    this.stack = stack;
    this.developerSide = "frontend";
    this.projectQuantity = projectQuantity;
  }
  expandStack(newTech) {
    this.stack.push(newTech);
  }
}
class BackendDeveloper extends Employee {
  constructor(name, grade, skills, company, stack, projectQuantity) {
    super(name, grade, skills, company);
    this.stack = stack;
    this.developerSide = "backend";
    this.projectQuantity = projectQuantity;
  }
  expandStack(newTech) {
    this.stack.push(newTech);
  }
}
class Manager extends Employee {
  constructor(name, grade, skills, company, projectQuantity) {
    super(name, grade, skills, company);
    this.projectQuantity = projectQuantity;
  }
  checkMember(minQuality, member) {
    if (minQuality < member.grade) return false;
    else return true;
  }
}

// frontend, backend, manager objects

let frontendMax = new FrontendDeveloper(
  "Max",
  "L1",
  ["hardworking"],
  "Unemployed",
  ["git", "js"],
  21
);
let frontendLeva = new FrontendDeveloper(
  "Leva",
  "L3",
  ["hardworking", "great dancer"],
  "Vkusvill",
  ["git", "js", "C++"],
  21
);
let backendOleg = new BackendDeveloper(
  "Oleg",
  "L2",
  ["fluent english"],
  "Mail.ru",
  ["nodejs", "git"],
  10
);
let managerSveta = new Manager(
  "Sveta",
  "L4",
  ["woman", "good kisser"],
  "School21",
  31
);
let managerKatya = new Manager(
  "Katya",
  "L3",
  ["speedrunner", "good chef"],
  "School21",
  41
);

// objects!
let staffTeam = {
  developers: {
    frontend: [frontendMax, frontendLeva],
    backend: [backendOleg],
  },
  managers: [managerSveta, managerKatya],
};

let soLong = new Project("so_long", "L2", staffTeam);
let miniShell = new Project("minishell", "L3", staffTeam);

let arrProjects = [soLong, miniShell];

let finishedProjects = [];

let school21 = new Company(
  "21 school",
  arrProjects,
  finishedProjects,
  staffTeam
);

console.log(backendOleg, managerSveta);
console.log();

