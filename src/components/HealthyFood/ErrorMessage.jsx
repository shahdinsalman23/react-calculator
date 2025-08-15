import React from 'react'

const ErrorMessage = ({ items }) => {
  return (
    <>
        {items.length === 0 && <h4>I'm still hungry</h4> }
    </>
  )
}

export default ErrorMessage