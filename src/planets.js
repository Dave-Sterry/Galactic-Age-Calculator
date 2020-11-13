export class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }

  lifeExpect() {
    if (this.gender === "male"){
      return 76;
    } else if (this.gender === "female") {
      return 81;
    }
  }
  
  beyondLife() {
    if (this.age > this.lifeExpect()){
      return (this.age - this.lifeExpect());
      } else if (this.age < this.lifeExpect()){
        return (this.lifeExpect() - this.age);
      }
    }

  mercYears() {
    return Math.floor(this.age /.24);
  }

  venYears() {
    return Math.floor(this.age /.62);
  }

  marsYears() {
    return Math.floor(this.age / 1.88);
  }

  jupYears() {
    return Math.floor(this.age / 11.86);
  }
   
  mercLife() {
    return Math.floor((this.lifeExpect() - this.age) / .24);
  }

  venLife() {
    return Math.floor((this.lifeExpect() - this.age) / .62);
  }

  marsLife() {
    return Math.floor((this.lifeExpect() - this.age) /1.88);
  }

  jupLife() {
    return Math.floor((this.lifeExpect() - this.age) / 11.86);
  }
}