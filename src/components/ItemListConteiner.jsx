import React from "react";
import "./ItemListConteiner.css"


function ItemListConteiner(props) {
    return(
        <div>
            <h1>
                {props.Greeting}
            </h1>
        </div>
    );
}

export default ItemListConteiner;