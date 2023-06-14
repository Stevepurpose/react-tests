import React from 'react'
import { useState } from 'react'

const CheckboxWithLabel = ({labelOn,labelOff}) => {
  const[isChecked,setIsChecked]=useState(false)
  const handleChange=()=>{
    setIsChecked(!isChecked)
            
  }


    return (
    <div>
        <label>
<input type="checkbox" checked={isChecked} onChange={handleChange}/>
{isChecked?labelOn:labelOff}

        </label>
        

    </div>
  )
}

export default CheckboxWithLabel