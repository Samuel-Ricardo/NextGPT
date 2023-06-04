
/*
 * @jest-environment jest-environment-jsdom
 * */


import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Home from '@/app/page'
import mockRouter from 'next-router-mock';
import { ELEMETNS } from '@/config/const';

jest.mock('next/navigation', () => require('next-router-mock'));

describe("[UI] - Page: Home", () => {

  it("should render", () => {

    mockRouter.push("/");

    render(<Home/>)
 
    const main = document.querySelector("main")

    expect(main).toBeInTheDocument()
  })

  it("Should render Hello Button", async () => {
  
    render(<Home/>)

    const button = screen.getByTestId(ELEMETNS.ID.HELLO_BUTTON)

    expect(button).toBeInTheDocument()
  })

  it("Should render Go To Chat Button", async () => {
    render(<Home/>)

    const button = screen.getByTestId(ELEMETNS.ID.GO_TO_CHAT_BUTTON)
    
    expect(button).toBeInTheDocument()
  })

})
