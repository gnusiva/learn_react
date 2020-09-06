import React from 'react'

function Comp(props) {
    return (
        <div className="border rounded m-3 p-3">
            <div>
                My name is {props.abc}
            </div>
            <div>
                my age is {props.age}
            </div>
        </div>
    )
}

export default Comp
