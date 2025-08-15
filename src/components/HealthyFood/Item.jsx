import React from 'react'

const Item = ({ foodItem, bought, handlebuyButton  }) => {
  return (
    <>
      <li className={`list-item ${bought && 'active'}`} >
        <span>{foodItem}</span>
        <button className='button-buy' onClick={handlebuyButton}>buy</button>
      </li>
    </>
  )
}

export default Item