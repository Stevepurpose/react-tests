import { render} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Login from "./Login";


describe("test login component",()=>{
test("render login with input",()=>{
    let{findByRole}=render(<Login/>)
    let input=findByRole('input')
    expect(input).toBeTruthy()
})

test("email Input field should accept only email",()=>{
    let{getByPlaceholderText}=render(<Login/>)
    let email=getByPlaceholderText("enter email")
    userEvent.type(email,"Maicon@gmail.com")
    expect(email.value).toMatch("Maicon@gmail.com")
})


})