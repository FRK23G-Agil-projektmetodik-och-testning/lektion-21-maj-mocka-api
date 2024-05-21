import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const server = setupServer(...handlers);

// Innan alla tester körs så starta och lyssna på servern
beforeAll(() => {
  server.listen();
});

// Efter alla tester körts så stäng ner servern
afterAll(() => {
  server.close();
});
