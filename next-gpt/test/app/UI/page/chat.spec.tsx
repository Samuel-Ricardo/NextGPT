/*
 * @jest-environment jest-environment-jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import ChatScreen from '@/app/chat/page';
import { ELEMETNS } from '@/config/const';
import { render, screen } from '@testing-library/react';
import routerMock from 'next-router-mock';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

// const router = require('next-router-mock');

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue("123")
  }),
}));

describe("[UI] - Page: Chat", () => {
  
  it ("Should Render chat", () => {
    render(
      <ChatScreen/>
    )

    const chat = screen.getByTestId(ELEMETNS.ID.CHATTING)

    expect(chat).toBeInTheDocument()
    expect(chat).toBeVisible() 
  })

  it ("Should render text area", () => {
    render(<ChatScreen/>)

    const typeBar = screen.queryByTestId(ELEMETNS.ID.MESSAGE)

    expect(typeBar).toBeInTheDocument();
    expect(typeBar).toBeVisible();
    expect(typeBar?.getAttribute("placeholder")).toEqual("Type your message...");
  })

  it("Should render submit button", () => {
    render(<ChatScreen/>)

    const submit = screen.getByTestId(ELEMETNS.ID.SUBMIT)

    expect(submit).toBeInTheDocument();
    expect(submit).toBeVisible();
    expect(submit).toBeEnabled();

  })

})
