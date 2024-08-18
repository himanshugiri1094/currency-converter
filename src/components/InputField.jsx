import React from 'react'

function InputField({ label, currList, onChangeFn, input, onInputChange, defaultVal }) {
    return (
        <>
            <div className='h-1/6 w-2/6 flex justify-around items-center border-2 border-black max-lg:w-11/12 rounded-md'>
                <div className='flex flex-col'>
                    <label>{label}</label>
                    <input
                        type="number"
                        className='border-2 border-black p-1 outline-none rounded-md'
                        value={input}
                        onChange={(e) => {
                            onInputChange(e.target.value);
                        }}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Currency Type</label>
                    <select
                        className='border-2 border-black p-1 rounded-md'
                        onChange={(e) => {
                            onChangeFn(e.target.value);
                        }}
                        value={defaultVal}
                    >
                        {
                            currList.map((currEle, idx) => {
                                return (
                                    <option
                                        key={idx}
                                        value={currEle}
                                    >{currEle}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputField
