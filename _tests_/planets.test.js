import { TestScheduler } from 'jest';
import { Planets } from './../src/planets.js';

describe('Planets', () => {

  test('should correctly return an constructor of planets', () => {
    const testPlanets = new Planets (2,3,4,5);
    expect(testPlanets.mercury).toEqual(1);
    expect(testPlanets.venus).toEqual(1);
    expect(testPlanets.mars).toEqual(1);
    expect(testPlanets.jupiter).toEqual(1);
  });
});