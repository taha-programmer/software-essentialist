import { StatsCalculator } from './index';

describe('stats calculator', () => {
  const firstSequence = [13, 3, 7, 15, 11, 5, 9, 9, 7];
  const secondSequence = [
    601, 101, 401, 701, 501, 201, 301, 601, 101, 501, 401,
  ];
  const thirdSequence = [151, 51, 101, 176, 126, 26, 76, 51];
  const fourthSequence = [152, 52, 177, 127, 27, 77];

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
    it.each([
      [3, firstSequence],
      [101, secondSequence],
      [26, thirdSequence],
      [27, fourthSequence],
    ])(
      `knows that %s is the minimum value in this sequence %s`,
      (mimimum: number, sequence: number[]) => {
        let result = StatsCalculator.calculateStats(sequence);
        expect(result.minimum).toBe(mimimum);
      }
    );
  });

  describe('Calculate maximum value in a sequence', () => {
    it.each([
      [15, firstSequence],
      [701, secondSequence],
      [176, thirdSequence],
      [177, fourthSequence],
    ])(
      `knows that %s is the Maximum value in this sequence %s`,
      (maximum: number, sequence: number[]) => {
        let result = StatsCalculator.calculateStats(sequence);
        expect(result.maximum).toBe(maximum);
      }
    );
  });

  describe('Calculate count of a sequence', () => {
    it.each([
      [firstSequence.length, firstSequence],
      [secondSequence.length, secondSequence],
      [thirdSequence.length, thirdSequence],
      [fourthSequence.length, fourthSequence],
    ])(
      `knows that %s is the count of items in sequence %s`,
      (count: number, sequence: number[]) => {
        let result = StatsCalculator.calculateStats(sequence);
        expect(result.count).toBe(count);
      }
    );
  });

  describe('Calculate average value in a sequence', () => {
    it.each([
      [8.777777777777779, firstSequence],
      [401, secondSequence],
      [94.75, thirdSequence],
      [102, fourthSequence],
    ])(
      `knows that %s is the Average value in this sequence %s`,
      (average: number, sequence: number[]) => {
        let result = StatsCalculator.calculateStats(sequence);
        expect(result.average).toBe(average);
      }
    );
  });
});
