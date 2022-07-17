export class Employee {
  constructor(name, grade, hardSkills, company) {
    this.name = name;
    this.grade = grade;
    this.hardSkills = hardSkills;
    this.company = company;
  }
  changeCompany(companyName) {
    this.company = companyName;
  }
  upGrade() {
    if (this.grade === "L1") this.grade = "L2";
    else if (this.grade === "L2") this.grade = "L3";
    else if (this.grade === "L3") this.grade = "L4";
  }
  addSkill(skill) {
    this.hardSkills.push(skill);
  }
}
