export const stateRevenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Others: 19849.53,
};

export function calculateStatePercentage(stateRevenue) {
  const totalRevenue = Object.values(stateRevenue).reduce((acc, val) => acc + val, 0);

  return Object.entries(stateRevenue).reduce((acc, [state, value]) => {
    acc[state] = (value / totalRevenue) * 100;
    return acc;
  }, {});
}
