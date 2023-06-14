import Input from "./Input";
import {act, fireEvent, render } from "@testing-library/react";


describe("Input component",()=>{

    test("rendered input",()=>{
let{getByTestId}=render(<Input showDiv={false}/>)
let input=getByTestId("searchbar")
expect(input).toBeTruthy()
})

test("render div",()=>{
    //destructure
    const{queryByTestId}=render(<Input showDiv={true}/>)
    let div=queryByTestId("dataShow")
    expect(div).toBeTruthy()
})


/*
test("change in input causes change in p",()=>{
  act(()=>{
    let{getByTestId}=render(<Input showDiv={true}/>)
    let searcher = getByTestId("searchbar")
    const para = getByTestId("displaySearch")
    const enterWord="purpose"
     fireEvent.change(searcher,{target:{value:enterWord}})
    expect(para.innerHTML).toBe(enterWord)

})

})
*/
})