import { listSales } from './listSales';

const firstAndLastDayOfMonth = (date) =>{
    const obj = [];
    Object.assign(obj, {
        firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getTime(),
        lastDay: new Date(date.getFullYear(), date.getMonth()+1, 0).getTime()
    })

    return obj;
}

const listOfSalesInMonth = (lists, firstDay, lastDay)=> lists.filter((list)=>{
    const currentDate = new Date(list.date).getTime();
    if(currentDate >= firstDay && currentDate <= lastDay){
        return list;
    }
});

const firstSaleInMonth = (list) => list.reduce((a, b)=>{
    if(b.date < a.date) a = b;
        return a;
});

const bonus = (value) => {
    if(value <= 400) 
        return 0.01
    else if (value > 400 && value <= 800) 
        return 0.02
    else if (value > 800 && value <= 1200) 
        return 0.03
    else if (value > 1200 && value <= 1600) 
        return 0.04
    
    return 0
};

const bonusOfFirstSale = (value) => {
    if(value > 800 && value <=1200) 
        return 50 
    else if (value > 1200 && value <= 1600)
        return 100
    
    return 0
};

export const comission = async (value) =>{
    
    const sales = await listSales();
    const date = new Date();

    const { firstDay, lastDay } = firstAndLastDayOfMonth(date);

    const listOfSales = listOfSalesInMonth(sales, firstDay, lastDay);
    const firstSale = firstSaleInMonth(listOfSales);
    const bonusSale = bonus(value);
    const bonusFirstSale = bonusOfFirstSale(value);

    const totalValueOfMonth = listOfSales.reduce((a, b)=> a.value + b.value);
    const bonusOfValueMonth = totalValueOfMonth > 10000 ? 0.01 : 0;

    console.log(listOfSales);

    
    // const bonusResult = value * bonus(value);
    // const bonusOfValueMonthResult = value * bonusOfValueMonth(value);
    // const bonusOfFirstSaleResult = value + bonusOfFirstSale(value);

    // const actualSale = value + bonusResult + bonusOfValueMonthResult;
    // const firstSale = value + bonusOfFirstSaleResult;

    
    // console.log(firstSaleInMonthResult);
    // console.log(totalValueOfMonthResult);
    // const listOfSalesOnMonth = sales.filter((sale)=>{
    //     const currentDate = new Date(sale.date).getTime();
    //     if(currentDate >= firstDay && currentDate <= lastDay){
    //         return sale;
    //     }
    // });
    
    // const firstSale = listOfSalesOnMonth.reduce((a, b)=>{
    //     if(b.date < a.date) a = b;
    //         return a;
    // });

    




    

    // console.log("sales of month ", listOfSalesOnMonth);

    
    
    // console.log(firstSale);
    // console.log(salesValueOfMonth);
}

















