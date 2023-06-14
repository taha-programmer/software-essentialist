import { StatsCalculator } from './index';

describe('stats calculator', () => {
  it('exists', () => {
    expect(StatsCalculator).toBeDefined();
  });

  it('returns an object', () => {
    const result = StatsCalculator.calculateStats([3, 4, 5, 6]);
    expect(typeof result).toBe('object');
  });
});

