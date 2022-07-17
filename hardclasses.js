import { Employee } from "./classes.js";

export class Company {
  constructor(companyName, currentProjects, completedProjects, staff) {
    this.companyName = companyName;
    this.currentProjects = currentProjects;
    for (let i = 0; i < currentProjects.length; i++) {
      currentProjects[i].completeProject = currentProjects[
        i
      ].completeProject.bind(this, currentProjects[i]);
	  currentProjects[i].addNewProjectMember = currentProjects[
        i
      ].addNewProjectMember.bind(this, currentProjects[i]); 
    }
    this.completedProjects = completedProjects;
    this.staff = staff;
  }
  addNewCompanyMember(member) {
    member.company = this.companyName;
    if (member.constructor.name == "FrontendDeveloper")
      this.staff.developers.frontend.push(member);
    else if (member.constructor.name == "BackendDeveloper")
      this.staff.developers.backend.push(member);
    else if (member.constructor.name == "Manager")
      this.staff.managers.push(member);
  }
  addProject(project) {
	project.addNewProjectMember = project.addNewProjectMember.bind(this, project)
    this.currentProjects.push(project);
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
  }
  completeProject(oldthis) {
    for (let i = 0; i < oldthis.team.developers.backend.length; i++)
      oldthis.team.developers.backend[i].projectQuantity++;
    for (i = 0; i < oldthis.team.developers.frontend.length; i++)
      oldthis.team.developers.frontend[i].projectQuantity++;
    oldthis.team.manager[i].projectQuantity++;
    this.completedProjects.push(oldthis);
    this.currentProjects = this.currentProjects.filter(function (e) {
      return e !== oldthis;
    });
  }
  addNewProjectMember(oldthis, member) {
    if ((member.grade >= oldthis.minQualification) && (this.companyName == member.company)) {
      if (member.constructor.name == "FrontendDeveloper") {
		for (const e of this.currentProjects) {
			if (e.team.developers.frontend.find(el => el === member)) {
				console.log("what!!!")
				return
			}
		}
		console.log("FREE")
        oldthis.team.developers.frontend.push(member);
	  }
      else if ((member.constructor.name == "BackendDeveloper")
	   && (!this.currentProjects.forEach(function(e) { 
		return (e.team.developers.backend.find(el => el === member))
	})))
        oldthis.team.developers.backend.push(member);
      else if ((member.constructor.name == "Manager")  
	  && (!this.currentProjects.forEach(function(e) { 
		return (e.team.manager.find(el => el === member))
	}))) oldthis.team.manager = member;
    }
  }
}

export class FrontendDeveloper extends Employee {
  constructor(name, grade, hardSkills, company, stack, projectQuantity) {
    super(name, grade, hardSkills, company);
    this.stack = stack;
    this.developerSide = "frontend";
    this.projectQuantity = projectQuantity;
  }
  expandStack(newTech) {
    this.stack.push(newTech);
  }
}

export class BackendDeveloper extends Employee {
  constructor(name, grade, hardSkills, company, stack, projectQuantity) {
    super(name, grade, hardSkills, company);
    this.stack = stack;
    this.developerSide = "backend";
    this.projectQuantity = projectQuantity;
  }
  expandStack(newTech) {
    this.stack.push(newTech);
  }
}

export class Manager extends Employee {
  constructor(name, grade, hardSkills, company, projectQuantity) {
    super(name, grade, hardSkills, company);
    this.projectQuantity = projectQuantity;
  }
  checkMember(minQuality, member) {
    if (this.company === member.company) {
      if (minQuality <= member.grade) return true;
      else return false;
    }
  }
}
