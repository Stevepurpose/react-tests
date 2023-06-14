import React from 'react'
import { useState } from 'react'

const Input = ({showDiv}) => {
    const[searchWord,setSearchWord]=useState("")
    
    function handleSearch(e){
        setSearchWord(e.target.value)
    }

  return (
    <div>
<input type="text" data-testid="searchbar" placeholder='search...' onChange={handleSearch}/>
<p data-testid="displaySearch">{searchWord}</p>

{showDiv && (
<div data-testid="dataShow">
Hello everyone I go by the name of Steve

</div>
)}



    </div>
  )
}

export default Input