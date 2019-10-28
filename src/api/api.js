import { httpGet, httpPost } from '../api/http';

// 用户注册
export function Register(data = {}) {
  return httpPost('/register', data);
}

export function render(data = {}) {
  return httpGet('/', data);
}

export function useraccess(data = {}) {
  return httpGet('/', data);
}

export function access(data = {}) {
  return httpGet('/', data);
}

export function charts(data = {}) {
  return httpGet('/', data);
}

export function usercharts(data = {}) {
  return httpGet('/', data);
}

export function form(data = {}) {
  return httpGet('/', data);
}

export function userform(data = {}) {
  return httpGet('/', data);
}

export function userhome(data = {}) {
  return httpGet('/', data);
}

export function home(data = {}) {
  return httpGet('/', data);
}

export function userlayout(data = {}) {
  return httpGet('/', data);
}

export function layout(data = {}) {
  return httpGet('/', data);
}

export function log(data = {}) {
  return httpGet('/', data);
}

export function userlog(data = {}) {
  return httpGet('/', data);
}



