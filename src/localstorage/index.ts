import { User } from '@/interfaces/User';

export function setTokenToLocalstorage(token: string) {
  localStorage.setItem('token', token);
}

export function getTokenToLocalstorage() {
  return localStorage.getItem('token');
}

export function setUserToLocalstorage(user: User) {
  localStorage.setItem('user', user.name);
  localStorage.setItem('role_id', String(user.role_id));
}

export function getUserToLocalstorage() {
  return localStorage.getItem('username');
}

export function logout() {
  localStorage.clear();
}