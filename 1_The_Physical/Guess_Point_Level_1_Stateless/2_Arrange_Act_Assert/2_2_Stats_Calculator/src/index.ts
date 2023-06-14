type statistics = {
  minimum: number;
  maximum: number;
  count: number;
  average: number;
};
export class StatsCalculator {
  public static calculateStats = (input: number[]): statistics => {
    return {
      minimum: 1,
      maximum: 1,
      count: 1,
      average: 1,
    };
  };
}
