export class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }

  //lifeExpect() {
    //if (this.gender === "male"){
     // return 76;
    //} else if (this.gender === "female"){
     // return 81;
    //}
 // }
  mercYears() {
    return Math.floor(this.age /.24);
  }

 // venYears() {
    //return Math.floor(this.age /.62);
  //}

  //marsYears() {
    //return Math.floor(this.age / 1.88);
  //}

  //jupYears() {
    //return Math.floor(this.age / 11.86);
  //}
   
 /// mercLife() {
    //return Math.floor((this.lifeExpect() - this.age) / .24);
  }
//}