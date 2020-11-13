import { TestScheduler } from 'jest';
import Person from './..src/planets.js';

describe('Person', () => {
  
  test('should correctly return persons age and gender.', () => {
    const human = new Person(10, "male");
    expect(human.age).toEqual(3);
    expecd(human.gender).toEqual("male")
  });
});