// function that calculates total sales & total tax, grouped by company.

var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];






function calculateSalesTax(sales, taxRates) {
  var results = {};
  sales.forEach(function(company) {
    var prov = company.province;
    var salesTotal = company["sales"].reduce(function(a, b) {
      return a + b;
    }, 0);

    var tax = salesTotal * taxRates[prov];
    results[prov] = {};
    results[prov].totalSales = salesTotal;
    results[prov].totalTaxes = tax;
  });
  return results;
}


console.log(results = calculateSalesTax(companySalesData, taxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

// else {
//       characters[splitter2[i]] = [i];
//     }




