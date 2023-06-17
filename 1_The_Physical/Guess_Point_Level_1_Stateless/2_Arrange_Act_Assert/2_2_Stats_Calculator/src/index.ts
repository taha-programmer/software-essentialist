type statistics = {
  minimum: number;
  maximum: number;
  count: number;
  average: number;
};
export class StatsCalculator {
  public static calculateStats = (input: number[]): statistics => {
    let minimum: number = input[0];
    for (let index = 0; index < input.length; index++) {
      minimum = input[index] < minimum ? input[index] : minimum;
    }

    let maximum: number = input[0];
    for (let index = 0; index < input.length; index++) {
      maximum = input[index] > maximum ? input[index] : maximum;
    }

    let count: number = input.length;

    const calculateAverage = (arr: number[]) => {
      let total: number = 0;
      arr.forEach(num => (total += num));
      return total / arr.length;
    };

    let average = calculateAverage(input);

    return {
      minimum,
      maximum,
      count,
      average,
    };
  };
}
