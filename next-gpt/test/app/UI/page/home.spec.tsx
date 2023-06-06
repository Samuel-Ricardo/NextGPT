
/*
 * @jest-environment jest-environment-jsdom
 * */


import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Home from '@/app/page'
import mockRouter from 'next-router-mock';
import { ELEMETNS } from '@/config/const';
import { resetMocks } from '@test/utils/mock';

jest.mock('next/navigation', () => require('next-router-mock'));

describe("[UI] - Page: Home", () => {

  beforeEach(() => resetMocks() )

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

  it("Should route to Chat", async () => {
    render(<Home/>)

    jest.spyOn(mockRouter, 'push')

    const button = screen.getByTestId(ELEMETNS.ID.HELLO_BUTTON)

    button.onclick = (event) => mockRouter.push("/chat")
    button.click()

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith("/chat")

    expect(mockRouter.pathname).toBe("/chat")
  })

  it("Should route to chat ", async () => {
    render(<Home/>)

    jest.spyOn(mockRouter, 'push')

    const button = screen.getByTestId(ELEMETNS.ID.GO_TO_CHAT_BUTTON)
  
    button.onclick = (event) => mockRouter.push("/chat")
    button.click()

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith("/chat")

    expect(mockRouter.pathname).toBe("/chat")
  })

})
