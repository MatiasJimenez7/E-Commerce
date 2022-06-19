import ItemCount from "../AgregarAlCarrito/ItemCount";
 

function ItemDetail ({nombre,precio,img}) {

    return(
    <div className="mayordetail">
        <div className="holadetail">
            <img src={img} alt="image" />
            <h3>{nombre}</h3>
            <h3>${precio}</h3>
            
        </div>
        <div className="cajadetalle">
            <h3>{nombre}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, esse accusamus? Deleniti unde, vitae inventore quos minus ad sint porro velit, dolorum asperiores, perferendis laborum dolore tenetur. Aliquid, corporis tenetur!</p>
            <h3>Price: ${precio}</h3>
            <ItemCount stock={10} initial={1}/>
        </div>
    </div>
    )
}

export default ItemDetail;
