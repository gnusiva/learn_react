import React from 'react'

function Product({ imageUrl, name, desc, addButtonClick }) {

    function buttonClicked() {
        addButtonClick(name);
    }

    return (
        <div className="border d-flex my-2">
            <div className="">
                <img src={imageUrl} alt="img" width="100px" />
            </div>
            <div className=" mx-3">
                <h3>{name}</h3>
                <div className="">{desc}</div>
            </div>
            <div className="border ml-auto d-flex align-items-end">
                <div className="btn btn-primary" onClick={buttonClicked} >Add to Cart</div>
            </div>
        </div>
    )
}

export default Product
