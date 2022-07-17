import {
  Company,
  Project,
  FrontendDeveloper,
  BackendDeveloper,
  Manager,
} from "./hardclasses.js";

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

let frontendDima = new FrontendDeveloper(
  "Dima",
  "L1",
  ["hardworking", "great dancer"],
  "Masterbim",
  ["git", "js", "C++"],
  21
);

// objects!
let pool = {
  developers: {
    frontend: [],
    backend: [],
  },
  managers: [],
};

let team = {
  developers: {
    frontend: [],
    backend: [],
  },
  manager: undefined,
};

let soLong = new Project("so_long", "L2", team);
let miniShell = new Project("minishell", "L3", team);

let arrProjects = [soLong];

let finishedProjects = [];

let school21 = new Company(
  "21 school",
  arrProjects,
  finishedProjects,
  pool
);


school21.getMembersQuantity()
school21.addNewCompanyMember(frontendDima);
school21.addNewCompanyMember(managerKatya);
school21.addNewCompanyMember(managerSveta);
school21.addNewCompanyMember(backendOleg);
school21.addNewCompanyMember(frontendLeva);
school21.addProject(miniShell)
school21.getMembersQuantity()
miniShell.addNewProjectMember(frontendDima);
soLong.addNewProjectMember(frontendDima);
console.log(miniShell);
console.log(soLong);
