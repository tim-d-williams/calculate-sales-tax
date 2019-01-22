//Given the following data, implement a function that calculates
//the total sales and total tax, grouped by company.

var salesTaxRates = {
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

//Implement the function calculateSalesTax that returns the results below.

//calculate total sales by company
  //locate company in object
    //loop through sale array
    //add array values
    //output totalSales

//calculate sales tax
  //identify province where sales occurred
  //find tax rate
    //calcuate tax totalSales * taxRate
  //sum total tax for company



function calculateSalesTax(salesData, taxRates) {

  for (var i = 0; i < companySalesData.length; i++) {
    var companyName = companySalesData[i].name
    var province = companySalesData[i].province
    var taxRate = salesTaxRates[province]
    var totalSales = 0;
    var totalTax = 0;
    var output = {};

      for (var input of companySalesData[i].sales) {
        totalSales += Number(input);
        totalTax = taxRate * totalSales;

        output[companyName]  = {

          totalSales,
          totalTax
      }

          }
            console.log(output)
       } ;
}



var results = calculateSalesTax(companySalesData, salesTaxRates);

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