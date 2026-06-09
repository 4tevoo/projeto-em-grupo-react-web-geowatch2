export const SORT_OPTIONS = [
  { key: 'pontos',           label: 'Pontos' },
  { key: 'partidas',         label: 'Partidas' },
  { key: 'recorde',          label: 'Recorde' },
];

// Emojis tirados do site unicode.org
export const BADGE_MAP = {
  0: '🥇',
  1: '🥈',
  2: '🥉',
};

export const getInitials = (name = '') =>
  name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();