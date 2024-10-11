import React from 'react'

const CardPizza = (props) => {
  return (
        <div className='col-sm-4'>
            <div className="card">
            <img src={props.img} className="card-img-top"/>
            <div className="card-body text-center">
                <h5 className="card-title">Pizza {props.name}</h5>
                <hr />
                <h6 className="card-text">Ingredientes:</h6>
                <p className="card-text">{props.ingredients.join(", ")} </p>
                <hr />
                <h6 className="card-text">Precio: ${props.price}</h6>

                <a href="#" className="btn btn-light m-4">Ver más
                    <i class="bi bi-eye ms-2"></i>             
                </a>
                <a href="#" className="btn btn-dark m-4">Añadir
                    <i class="bi bi-cart-dash ms-2"></i>                
                </a>

            </div>
            </div>
        </div>
  )
}

export default CardPizza