export class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
  mercYears() {
    return (this.age * .24);
  }
}