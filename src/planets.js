export class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
  mercYears() {
    return Math.floor(this.age * .24);
  }

  venYears() {
    return Math.floor(this.age * .62);
  }

  marsYears() {
    return Math.floor(this.age * 1.88);
  }
  
}