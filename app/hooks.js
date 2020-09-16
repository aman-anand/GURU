import history from 'utils/history';
import { isUserAlreadyLogin } from './dataService/Login';

export function redirectToLogin() {
  if (!isUserAlreadyLogin()) {
    history.push('/signin');
  }
}

export function redirectToDashboard() {
  if (isUserAlreadyLogin()) {
    history.push('/home');
  }
}

export function PageNotFoundHook() {
  if (!isUserAlreadyLogin()) {
    history.push('/signin');
  } else if (isUserAlreadyLogin()) {
    history.push('/home');
  }
}

/**
 * Helper for creating injectors
 */
export default function getHooks() {
  window.console.log('getHooks');
}
