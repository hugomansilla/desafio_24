import React from 'react'

const Header = () => {
  return (
    <>
        <div className='col-sm-12'>
            <div className="card text-bg-dark">
                <img src="https://picsum.photos/id/163/1000/300/" class="card-img"/>
                <div className="card-img-overlay centrar">
                    <h1 className="card-title">¡Pizzería Mamma Mia!</h1>
                    <p className="card-text">¡Tenemos las mejores pizzas que podrás encontrar!</p>
                    <hr />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header