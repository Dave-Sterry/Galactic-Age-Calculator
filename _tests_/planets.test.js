import { TestScheduler } from 'jest';
import { Planets } from './../src/planets.js';

describe('Planets', () => {

  test('should correctly return an constructor of planets', () => {
    const testPlanets = new Planets (2,3,4,5);
    expect(testPlanets.mercury).toEqual();
    expect(testPlanets.venus).toEqual(3);
    expect(testPlanets.mars).toEqual(4);
    expect(testPlanets.jupiter).toEqual(5);
  });
});