import { themes } from './themes.js';

const root = document.getElementById('root');

themes.forEach(t => {
  const card = document.createElement('div');
  card.className = 'theme-card';
  card.innerHTML = `
    <h2>${t.theme}</h2>
    <p><strong>Qur'an:</strong> ${t.quran}</p>
    <p><strong>Bible:</strong> ${t.bible}</p>
    <p><strong>Bhagavad Gita:</strong> ${t.gita}</p>
    <p><strong>Tao (Mishrin):</strong><br>${t.tao.join('<br>')}</p>
    <p><em>${t.commentary}</em></p>
  `;
  root.appendChild(card);
});
