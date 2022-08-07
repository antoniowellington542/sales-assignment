import { createContext, useState } from "react";

const BonusOfMonthContext = createContext({});

const BonusOfMonthProvider = ({children}) => {
    const [bonusAchieved,setBonusAchieved] = useState(false);
    
    return (
        <BonusOfMonthContext.Provider value={{bonusAchieved, setBonusAchieved}}>
            {children}
        </BonusOfMonthContext.Provider>
    )
}

export { BonusOfMonthContext, BonusOfMonthProvider}