export const users = [
  { username: 'xii1_a', password: 'kelas121', class: 'XII-1' },
  { username: 'xii1_b', password: 'kelas121', class: 'XII-1' },
  { username: 'xii2_a', password: 'kelas122', class: 'XII-2' },
  { username: 'xii2_b', password: 'kelas122', class: 'XII-2' },
  { username: 'xii3_a', password: 'kelas123', class: 'XII-3' },
  { username: 'xii3_b', password: 'kelas123', class: 'XII-3' },
  { username: 'xii4_a', password: 'kelas124', class: 'XII-4' },
  { username: 'xii4_b', password: 'kelas124', class: 'XII-4' },
  { username: 'xii5_a', password: 'kelas125', class: 'XII-5' },
  { username: 'xii5_b', password: 'kelas125', class: 'XII-5' },
  { username: 'xii6_a', password: 'kelas126', class: 'XII-6' },
  { username: 'xii6_b', password: 'kelas126', class: 'XII-6' },
  { username: 'xii7_a', password: 'kelas127', class: 'XII-7' },
  { username: 'xii7_b', password: 'kelas127', class: 'XII-7' },
  { username: 'xii8_a', password: 'kelas128', class: 'XII-8' },
  { username: 'xii8_b', password: 'kelas128', class: 'XII-8' },
  { username: 'xii9_a', password: 'kelas129', class: 'XII-9' },
  { username: 'xii9_b', password: 'kelas129', class: 'XII-9' },
  { username: 'admin_utama', password: 'admincyber', role: 'admin' }
];

export function checkLogin() {
  const loggedInUser = localStorage.getItem('currentUser');
  if (!loggedInUser) {
    const href = window.location.href.toLowerCase();
    if (!href.includes('index') && !href.includes('install') && !href.endsWith('/')) {
        window.location.href = 'index.html';
    }
  }
  return loggedInUser ? JSON.parse(loggedInUser) : null;
}

export function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

