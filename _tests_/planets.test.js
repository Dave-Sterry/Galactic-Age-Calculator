import { Person } from './../src/planets.js';

describe('Person', () => {
  let resuableHuman;

  beforeEach(() => {
    resuableHuman = new Person(10,"female")
  })
  
  test('should correctly return persons age and gender.', () => {
    expect(resuableHuman.age).toEqual(10);
    expect(resuableHuman.gender).toEqual("female")
  });

  test('should correctly return persons age on mercury.', () => {
    expect(resuableHuman.mercYears()).toEqual(41)
  });
  
 test('should correctly return persons age on venus.', () => {
   expect(resuableHuman.venYears()).toEqual(16)
  });

  test('should correctly return persons age on mars.', () => {
    expect(resuableHuman.marsYears()).toEqual(5)
  });

  test('should correctly return person age on jupiter' , () => {
    expect(resuableHuman.jupYears()).toEqual(0)
  });

  test('should correctly return life expectancy' , () => {
    expect (resuableHuman.lifeExpect()).toEqual(81)
  });

  test('should correctly return life expectancy for male' , () => {
    let testHuman = new Person(10, "male");
    expect(testHuman.lifeExpect()).toEqual(76);
  })

  test('should correctly return users life expectancy on mercury.' , () => {
    expect (resuableHuman.mercLife()).toEqual(295)
 });

 test('should correctly return users life expectancy on venus.', () => {
   expect(resuableHuman.venLife()).toEqual(114);
 });

 test('should correctly return users life expectancy on mars' , () => {
   expect (resuableHuman.marsLife()).toEqual(37);
 });

 test('should correctly return users life expectancy on jupiter.' , () => {
   expect(resuableHuman.jupLife()).toEqual(5); 
 });

 test('should correctly return users years past or left expectancy', () =>
 {
   expect(resuableHuman.beyondLife()).toEqual(71);
 });

test('should correctly return users years past life expectancy' , () =>{
  let oldJim = new Person (78,"male");
  expect(oldJim.beyondLife()).toEqual(2);
})
});