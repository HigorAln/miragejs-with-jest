import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App'
import { Server } from 'miragejs';
import { makeServer } from '../../miragejs/server';

describe('Home Page', () => {
  let server: Server;

  beforeAll(() => {
    server = makeServer({  environment: "test"})
  })

  it("should be render Hello world in the screen", async () => {
    server.createList("tweet", 2);

    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole("heading")).toHaveLength(2)
    })
  })
});