import { 
    bonus, 
    bonusOfFirstSale, 
    firstAndLastDayOfMonth, 
    firstSaleInMonth, 
    listOfSalesInMonth, 
    totalValueOfMonth
} from './comissionFunctions';
import { listSales } from './listSales';


export const comission = async (actualSale, bonusAchieved, setBonusAchieved) =>{
    
    // Define o primeiro e ultimo dia do mes
    const date = new Date();
    const { firstDay, lastDay } = firstAndLastDayOfMonth(date);

    // Faz a requisição das vendas e faz as operacaçoes necessarias
    const sales = await listSales();
    const listOfSales = listOfSalesInMonth(sales, firstDay, lastDay);
    const firstSale = firstSaleInMonth(listOfSales); 
    const bonusSale = bonus(actualSale.value);
    const bonusFirstSale = bonusOfFirstSale(actualSale.value);
    const totalValueOfMonthResult = totalValueOfMonth(listOfSales);
    console.log(totalValueOfMonthResult);

    // Define true se alcançar a meta
    !bonusAchieved ? setBonusAchieved(totalValueOfMonthResult > 10000 ? true : false): null;
    const bonusOfValueMonth = bonusAchieved ? 0.01 : 0;

    // comissao primeira venda
    firstSale.comission += bonusFirstSale;

    //comissao venda atual
    actualSale.comission += actualSale.value*bonusSale + actualSale.value*bonusOfValueMonth;

    return {firstSale, actualSale}
}


















