const taxGST = 5;
const taxPST = 8;

const calculateTotal = (prices) => {
  const totals = {};
  // Add together all values from the prices array
  totals.beforeTax = prices.reduce((a, b) => a + b, 0);

  totals.GST = (totals.beforeTax * taxGST) / 100;
  totals.PST = (totals.beforeTax * taxPST) / 100;
  totals.sum = totals.beforeTax + totals.GST + totals.PST;

  return totals;
};

const showTotals = (prices) => {
  const totals = calculateTotal(prices);
  return `
        Before tax: $${totals.beforeTax.toFixed(2)}
        GST: $${totals.GST.toFixed(2)}
        PST: $${totals.PST.toFixed(2)}
        -----------------
        Sum total: $${totals.sum.toFixed(2)}
    `;
};
