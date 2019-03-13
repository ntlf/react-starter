import delay from './delay';
import { postLogin as mockedPostLogin } from './__mocks__/auth';

// eslint-disable-next-line no-unused-vars
export const postLogin = async (username, password) => {
  await delay(1000);

  return mockedPostLogin();
};
