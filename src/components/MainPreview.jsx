import React, { useState } from 'react'
import CurrencyList from '../CurrencyApi/CurrencyList';
import InputField from "./InputField"
import Button from "./Button"

function MainPreview() {

    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [fromInput, setFromInput] = useState(1);
    const [toInput, setToInput] = useState('');

    const currObj = CurrencyList(from);
    const currList = Object.keys(currObj);

    const onChangeFrom = (value) => {
        setFrom(value);
    }
    const onChangeTo = (value) => {
        setTo(value);
    }

    const onInputChangeFrom = (value) => {
        setFromInput(value);
    }

    const getExRate = () => {
        const rate = fromInput * currObj[to];
        setToInput(rate);
    }

    return (
        <div>
            <>
                <div className="h-dvh w-dvw flex justify-center items-center">
                    <div className="h-full w-full bg-white rounded-lg flex flex-col items-center justify-center gap-2">
                        <div className="text-3xl font-semibold text-blue-500 mt-1">Currency Converter</div>
                        <InputField
                            label={"From"}
                            currList={currList}
                            onChangeFn={onChangeFrom}
                            input={fromInput}
                            onInputChange={onInputChangeFrom}
                            defaultVal={from}
                        />
                        <InputField
                            label={"To"}
                            currList={currList}
                            onChangeFn={onChangeTo}
                            input={toInput}
                            defaultVal={to}
                        />
                        <Button
                            onClickFn={getExRate}
                        />
                    </div>
                </div>
            </>
        </div>
    )
}

export default MainPreview
