/**
 * 
 * @param {*} value 
 * @returns bonus of sale
 */
export const bonus = (value) => {
    if(value <= 400) 
        return 0.01
    else if (value > 400 && value <= 800) 
        return 0.02
    else if (value > 800 && value <= 1200) 
        return 0.03
    else if (value > 1200 && value <= 1600) 
        return 0.04
};

/**
 * 
 * @param {*} value 
 * @returns bonus for first sale
 */
export const bonusOfFirstSale = (value) => {
    if(value > 800 && value <=1200) 
        return 50 
    else if (value > 1200 && value <= 1600)
        return 100 
};

/**
 * 
 * @param {*} valueSalesMonth
 * bonus for sales after hitting 10000 
 */
export const bonusOfValueMonth = (valueSalesMonth) => {valueSalesMonth > 10000 ? 0.01 : 0};

/**
 * 
 * @param {*} list 
 * @returns calc total value of sales on the month
 */
export const totalValueOfMonth = (list) => list.reduce((a, b)=> a.value + b.value);

/**
 * 
 * @param {*} date 
 * @return date in format of time
 */
export const dateInTime = (date) => {new Date(date).getTime()};

/**
 * 
 * @param {*} list 
 * @returns list with days in the actual month
 */
export const listOfSalesInMonth = (lists, firstDay, lastDay)=> lists.filter((list)=>{
    const currentDate = dateInTime(list.date);
    if(currentDate >= firstDay && currentDate <= lastDay){
        return list;
    }
});

/**
 * 
 * @param {*} list 
 * @returns first sale in the month
 */
export const firstSaleInMonth = (list) => list.reduce((a, b)=>{
    if(b.date < a.date) a = b;
        return a;
});

/**
 * 
 * @param {*} date 
 * @returns first day in the month
 */
export const firstDayInMonth = (date) => new Date(date.getFullYear(), date.getMonth()+1, 0).getTime();

/**
 * 
 * @param {*} date 
 * @returns last day in the month
 */
export const lastDayInMonth =  (date) =>  new Date(date.getFullYear(), date.getMonth()+1, 0).getTime();