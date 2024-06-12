import { CreditCardFormI } from "../interfaces/CreditCardFormI";

export const formatDate = (date: string | Date, existCardInfo: CreditCardFormI | undefined) => {
    if (existCardInfo) {
      return 0  
    } 
      let today = new Date();
      let fechaIng = new Date(date);
      let resta = today.getTime() - fechaIng.getTime();
      return Math.round(resta / (1000 * 60 * 60 * 24));
    
  };