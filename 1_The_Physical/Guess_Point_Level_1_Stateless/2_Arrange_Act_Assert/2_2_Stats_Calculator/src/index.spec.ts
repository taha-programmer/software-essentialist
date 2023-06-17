import { StatsCalculator } from './index';

describe('stats calculator', () => {
  const firstSequence = [13, 3, 7, 15, 11, 5, 9];
  const secondSequence = [601, 101, 401, 701, 501, 201, 301];
  const thirdSequence = [151, 51, 101, 176, 126, 26, 76];
  const fourthSequence = [152, 52, 102, 177, 127, 27, 77];

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

  describe('Calculate minimum value in a sequence', () => {
    it(`knows that 3 is the minimum value in this sequence ${firstSequence}`, () => {
      let result = StatsCalculator.calculateStats(firstSequence);
      expect(result.minimum).toBe(3);
    });

    it(`knows that 101 is the minimum value in this sequence ${secondSequence}`, () => {
      let result = StatsCalculator.calculateStats(secondSequence);
      expect(result.minimum).toBe(101);
    });

    it(`knows that 26 is the minimum value in this sequence ${thirdSequence}`, () => {
      let result = StatsCalculator.calculateStats(thirdSequence);
      expect(result.minimum).toBe(26);
    });

    it(`knows that 27 is the minimum value in this sequence ${fourthSequence}`, () => {
      let result = StatsCalculator.calculateStats(fourthSequence);
      expect(result.minimum).toBe(27);
    });
  });

  describe('Calculate maximum value in a sequence', () => {
    it(`knows that 15 is the Maximum value in this sequence ${firstSequence}`, () => {
      let result = StatsCalculator.calculateStats(firstSequence);
      expect(result.maximum).toBe(15);
    });
    it(`knows that 701 is the Maximum value in this sequence ${secondSequence}`, () => {
      let result = StatsCalculator.calculateStats(secondSequence);
      expect(result.maximum).toBe(701);
    });
    it(`knows that 176 is the Maximum value in this sequence ${thirdSequence}`, () => {
      let result = StatsCalculator.calculateStats(thirdSequence);
      expect(result.maximum).toBe(176);
    });
    it(`knows that 177 is the Maximum value in this sequence ${fourthSequence}`, () => {
      let result = StatsCalculator.calculateStats(fourthSequence);
      expect(result.maximum).toBe(177);
    });
  });
});

