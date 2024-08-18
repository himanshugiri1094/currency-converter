import { useEffect, useState } from "react";

const CurrencyList = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setData(result[currency]);
            })
    }, [currency]);
    return data;
}

export default CurrencyList;