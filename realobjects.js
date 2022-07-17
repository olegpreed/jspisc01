import { Company, Project, FrontendDeveloper, BackendDeveloper, Manager} from "./hardclasses.js"

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
	"L4",
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
  console.log(miniShell)
  school21.addNewCompanyMember(frontendDima)
  miniShell.addNewProjectMember(frontendDima)
  console.log(miniShell)
  