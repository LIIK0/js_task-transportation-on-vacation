/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = days * 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= 7) {
    return PRICE - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return PRICE - SHORT_TERM_DISCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
