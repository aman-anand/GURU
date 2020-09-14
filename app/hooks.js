import history from 'utils/history';
import { isUserAlreadyLogin } from './dataService/Login';

export function redirectToLogin() {
  if (!isUserAlreadyLogin()) {
    history.push('/signin');
  }
  window.console.log('redirectToLogin', isUserAlreadyLogin());
}

export function redirectToDashboard() {
  if (isUserAlreadyLogin()) {
    history.push('/home');
  }
}

export function PageNotFoundHook() {
  window.console.log('PageNotFoundHook');
}

/**
 * Helper for creating injectors
 */
export default function getHooks() {
  window.console.log('getHooks');
}
