import { Person } from './../src/planets.js';

describe('Person', () => {
  
  test('should correctly return persons age and gender.', () => {
    const human = new Person(10, "male");
    expect(human.age).toEqual(10);
    expect(human.gender).toEqual("male")
  });
});