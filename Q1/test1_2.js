const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 15000, quantity: 5 },
    { amount: 2000, quantity: 50 },
    { amount: 1000, quantity: 6 },
    { amount: 2376, quantity: 8 }
];

const calTotal=(salesArr)=>{
  const salesItemsTotal= salesArr.map((saleItem)=>({
    ...saleItem,
    total:saleItem.amount*saleItem.quantity
   }))
   return salesItemsTotal
}

const sortSalesTotal=(salesTotalArr,sortField)=>{
    const orderedSales = salesTotalArr.sort((current, next) => next[sortField] - current[sortField]);
    return orderedSales;
}

const salesTotal=calTotal(sales)
const sortSalesResult=sortSalesTotal(salesTotal,"total")
console.log("Sort Result",sortSalesResult)
