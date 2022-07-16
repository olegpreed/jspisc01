//classes!
class Company {
  constructor(companyName, currentProjects, completedProjects, staff) {
    this.companyName = companyName;
    this.currentProjects = currentProjects;
    for (let i = 0; i < currentProjects.length; i++) {
      currentProjects[i].completeProject = currentProjects[
        i
      ].completeProject.bind(this, currentProjects[i]);
    }
    this.completedProjects = completedProjects;
    this.staff = staff;
  }
  addNewCompanyMember(member) {
    if (member.constructor.name == "FrontendDeveloper")
      this.staff.developers.frontend.push;
    else if (member.constructor.name == "BackendDeveloper")
      this.staff.developers.backend.push;
    else if (member.constructor.name == "Manager") this.staff.managers.push;
  }
  addProject(Project) {
    this.currentProjects.push(Project);
  }
  getMembersQuantity() {
    console.log(
      this.staff.managers.length +
        this.staff.developers.frontend.length +
        this.staff.developers.backend.length
    );
  }
}

class Project {
  constructor(projectName, minQualification, Team) {
    this.projectName = projectName;
    this.minQualification = minQualification;
    this.Team = Team;
    this.secret = this;
  }
  completeProject(oldthis) {
    this.completedProjects.push(oldthis);
    this.currentProjects = this.currentProjects.filter(function (e) {
      return e !== oldthis;
    });
  }
  addNewProjectMember(member) {
    if (member.constructor.name == "FrontendDeveloper")
      this.Team.developers.frontend.push(member);
    else if (member.constructor.name == "BackendDeveloper")
      this.Team.developers.backend.push(member);
    else if (member.constructor.name == "Manager")
      this.Team.managers.push(member);
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
    if (minQuality <= member.grade) return true;
    else return false;
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

let frontendDima = new Manager(
  "Dima",
  "L1",
  ["hardworking", "great dancer"],
  "Masterbim",
  ["git", "js", "C++"],
  21
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

console.log(frontendMax);
frontendMax.expandStack("Unity");
console.log(frontendMax);
