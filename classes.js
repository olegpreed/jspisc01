export class Employee {
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
