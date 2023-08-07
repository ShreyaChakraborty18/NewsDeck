import React from 'react'
import loading from './spinner.gif'

const Spinner = () => {

    return (
        <div className="my-3 text-center">
            <img src={loading} alt="loading" />
        </div>
    )

}

export default Spinner
