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

    return {
      minimum,
      maximum: 1,
      count: 1,
      average: 1,
    };
  };
}
