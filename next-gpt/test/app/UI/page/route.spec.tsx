/*
 * @jest-environment jest-environment-jsdom
 * */


import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom/extend-expect';
import { ExampleComponent } from './comp';

jest.mock('next/router', () => require('next-router-mock'));

// const ExampleComponent = ({ href = '' }) => {
//   const router = useRouter();
//   return (
//     <button onClick={() => router.push(href)}>
//       The current route is: "{router.asPath}"
//     </button>
//   );
// }

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    // Set the initial url:
    mockRouter.push("/initial-path");
    
    // Render the component:
    render(<ExampleComponent href="/foo?bar=baz" />);
    expect(screen.getByRole('button')).toHaveTextContent(
      'The current route is: "/initial-path"'
    );

    // Click the button:
    fireEvent.click(screen.getByRole('button'));
    
    // Ensure the router was updated:
    expect(mockRouter).toMatchObject({ 
      asPath: "/foo?bar=baz",
      pathname: "/foo",
      query: { bar: "baz" },
    });
  });
});
