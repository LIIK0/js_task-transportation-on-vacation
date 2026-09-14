/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = days * 40;

  if (days >= 7) {
    return PRICE - 50;
  }

  if (days >= 3) {
    return PRICE - 20;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
