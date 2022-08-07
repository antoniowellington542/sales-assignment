export const firstAndLastDayOfMonth = (date) =>{
    const obj = [];
    Object.assign(obj, {
        firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getTime(),
        lastDay: new Date(date.getFullYear(), date.getMonth()+1, 0).getTime()
    })

    return obj;
}

export const listOfSalesInMonth = (lists, firstDay, lastDay)=> lists.filter((list)=>{
    const currentDate = new Date(list.date).getTime();
    if(currentDate >= firstDay && currentDate <= lastDay){
        return list;
    }
});

export const firstSaleInMonth = (list) => list.reduce((a, b)=>{
    if(b.date < a.date) a = b;
        return a;
});

export const bonus = (value) => {
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

export const bonusOfFirstSale = (value) => {
    if(value > 800 && value <=1200) 
        return 50 
    else if (value > 1200 && value <= 1600)
        return 100
    
    return 0
};

export const totalValueOfMonth = (list) => list.reduce((a, b) => a + b.value, 0); 