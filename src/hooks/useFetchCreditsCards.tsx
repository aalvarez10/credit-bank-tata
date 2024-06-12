import { useEffect, useState } from "react";
import { CreditCardFormI } from "../interfaces/CreditCardFormI";
import apiCalls from "../api/apiCalls";
import { ToastI } from "../components/Toast";
import { typeToast } from "../components/Toast/style";

const initDetailToast = {
    isShow: false,
    mensage: '',
    type: '',
  };


export const useFetchCreditsCards = () => {

    const [listCreditCards, setListCreditCards] = useState<CreditCardFormI[]>([]);
    const [listCreditCardsAux, setListCreditCardsAux] = useState<
        CreditCardFormI[]
    >([]);

    const [detailToast, setDetailToast] = useState<ToastI>(initDetailToast);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getListCreditCards();
      }, []);

    const getListCreditCards = async () => {
        try {
            setIsLoading(true);
            const { data, status } = await apiCalls.get('');
            if (status === 200) {
                setListCreditCards(data);
                setListCreditCardsAux(data);
                setIsLoading(false);
            } else {
                const detail: ToastI = {
                    isShow: true,
                    mensage: 'Error al consultar productos',
                    type: typeToast.error,
                };
                setDetailToast(detail);
                setIsLoading(false);
            }
        } catch (error) {
            const detail: ToastI = {
                isShow: true,
                mensage: 'Error al consultar productos',
                type: typeToast.error,
            };
            setDetailToast(detail);
            setIsLoading(false);
        }
    };

    return {
        listCreditCards,
        listCreditCardsAux,
        isLoading,
        detailToast,

        setDetailToast,
        setListCreditCards,
        getListCreditCards
    }
}