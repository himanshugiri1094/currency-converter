import React from 'react'

function Button({onClickFn}) {
    return (
        <button
            className='h-10 w-2/6 bg-blue-500 text-lg rounded-md max-lg:w-11/12 hover:text-white active:text-sm'
            onClick={(e) => {
                e.preventDefault();
                onClickFn(e.target);
            }}
        >Get Exchange Rate</button>
  )
}

export default Button
