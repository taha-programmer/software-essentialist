import { StatsCalculator } from './index';

describe('stats calculator', () => {
  it('exists', () => {
    expect(StatsCalculator).toBeDefined();
  });

  it('returns an object', () => {
    const result = StatsCalculator.calculateStats([3, 4, 5, 6]);
    expect(typeof result).toBe('object');
  });

  it('returns an object with 4 statistical keys', () => {
    const result = StatsCalculator.calculateStats([1]);
    expect(result).toHaveProperty('minimum');
    expect(result).toHaveProperty('maximum');
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('average');
  });
});

