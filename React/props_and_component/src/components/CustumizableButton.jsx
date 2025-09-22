import React from 'react'

function CustumizableButton({name,color}) {
  return (
    <button className='buttonComponent'   style={{ backgroundColor: color }}>
          {name}
    </button>
  )
}

export default CustumizableButton