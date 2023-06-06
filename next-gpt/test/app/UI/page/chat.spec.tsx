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
  
  

})
