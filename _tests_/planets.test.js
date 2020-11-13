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
   expect(resuableHuman.venYears()).toEqual(6)
  });

  //test('should correctly return persons age on mars.', () => {
   // expect(resuableHuman.marsYears()).toEqual(18)
 // });

  //test('should correctly return person age on mars' , () => {
   // expect(resuableHuman.jupYears()).toEqual(118)
  //});

  //test('should correctly return life expectancy' , () => {
   // expect (resuableHuman.lifeExpect()).toEqual(81)
  //});

  //test('should correctly return users life expectancy on mercury.' , //() => {
   // expect (resuableHuman.mercLife()).toEqual(78)
 // })
});