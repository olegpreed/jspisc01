import { Employee } from "./classes.js";

export class Company {
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
      this.staff.developers.frontend.push(member);
    else if (member.constructor.name == "BackendDeveloper")
      this.staff.developers.backend.push(member);
    else if (member.constructor.name == "Manager") this.staff.managers.push(member);
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

export class Project {
  constructor(projectName, minQualification, team) {
    this.projectName = projectName;
    this.minQualification = minQualification;
    this.team = team;
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
      this.team.developers.frontend.push(member);
    else if (member.constructor.name == "BackendDeveloper")
      this.team.developers.backend.push(member);
    else if (member.constructor.name == "Manager")
      this.team.managers.push(member);
  }
}

export class FrontendDeveloper extends Employee {
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

export class BackendDeveloper extends Employee {
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

export class Manager extends Employee {
  constructor(name, grade, skills, company, projectQuantity) {
    super(name, grade, skills, company);
    this.projectQuantity = projectQuantity;
  }
  checkMember(minQuality, member) {
    if (minQuality <= member.grade) return true;
    else return false;
  }
}
