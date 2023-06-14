import { render, screen } from '@testing-library/react';
import App from './App';

describe('component rendering',()=>{

  test("expect paragraph",()=>{
  render(<App />)

 const para = screen.getByText('learn react');
  expect(para).toBeInTheDocument()
})




test('renders header text', () => {
 const obj=render(<App/>)
 

  const heading=obj.getByText('Hello World.My first React Test')
  expect(heading).toBeInTheDocument()
})


})
