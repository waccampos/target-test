import data from "../dados.json" assert { type: "json" };

export function analyzeRevenue() {
  const validRevenue = data.filter((value) => value.valor > 0).map((value) => value.valor);

  return {
    lowestRevenue: Math.min(...validRevenue),
    highestRevenue: Math.max(...validRevenue),
    averageRevenue: validRevenue.reduce((acc, val) => acc + val, 0) / validRevenue.length,
    daysAboveAverage: validRevenue.filter(
      (value) => value > validRevenue.reduce((acc, val) => acc + val, 0) / validRevenue.length,
    ).length,
  };
}
