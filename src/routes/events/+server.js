// src/routes/events/+server.js
import { events } from 'sveltekit-sse';

/**
 * @param {number} milliseconds
 * @returns
 */
function delay(milliseconds) {
  return new Promise(function run(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

export function POST({ request }) {
  return events({
    request,
    async start({ emit }) {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const date = new Date();
        emit(
          'time',
          `Hello, the time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`
        );
        await delay(1000);
      }
    }
  });
}
