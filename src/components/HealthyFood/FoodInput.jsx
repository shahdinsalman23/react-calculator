import '../../App.css'

const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
        <input type="text" onKeyDown={handleKeyDown} className='input-field' placeholder='Enter Food Item here'/>
    </>
  )
}

export default FoodInput