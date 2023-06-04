
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

  

})
