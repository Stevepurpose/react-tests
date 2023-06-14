import CheckboxWithLabel from "./CheckboxWithLabel";
import{fireEvent,render} from '@testing-library/react'

test("CheckboxWithLabel changes the text after click",()=>{
const{queryByLabelText,getByLabelText}=render(<CheckboxWithLabel labelOn='on' labelOff='off'/> )
expect(queryByLabelText(/off/i)).toBeTruthy()
fireEvent.click(getByLabelText(/off/i))
expect(queryByLabelText(/on/i)).toBeTruthy()

})
