const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const text = await response.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!response.ok) throw new Error(data?.message || `Request failed (${response.status})`);
  return data;
}
export const getCsrf = () => request('/auth/csrf');
export const submitFeedback = (payload) => request('/feedback', { method: 'POST', body: JSON.stringify(payload) });
export const getSession = () => request('/auth/session');
export const login = (payload) => request('/auth/login', { method: 'POST', body: JSON.stringify(payload) });
export const getAdminStats = () => request('/admin/stats');
export const getFeedback = () => request('/admin/feedback');
