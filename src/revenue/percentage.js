export function calculateStatePercentage(stateRevenue) {
  const totalRevenue = Object.values(stateRevenue).reduce((acc, val) => acc + val, 0);

  return Object.entries(stateRevenue).reduce((acc, [state, value]) => {
    acc[state] = (value / totalRevenue) * 100;
    return acc;
  }, {});
}
