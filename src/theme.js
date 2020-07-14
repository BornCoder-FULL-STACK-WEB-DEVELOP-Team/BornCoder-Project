const color = {
  green: '#7cb343',
  lightGreen: '#e5f0d9',
  blue: '#008fb4',
  pink: '#e0446d',

  grey: '#535a77',
  lightGrey: '#b0bfc3',

  black: '#2a2b32',
  white: '#ffffff',
  red: '#e75245',
  yellow: '#e9a52c',
  border: '#e5e5e5',
};

export default {
  color,
  gutter: {
    xxs: '6px',
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  },

  border: {
    default: `1px solid ${color.border}`,
    button: '2px solid rgba(41, 43, 50, 0.1);',
    navLink: `3px solid ${color.blue}`,
    transparent: `2px solid transparent`,
  },

  borderRadius: {
    default: '200px',
    card: '4px',
  },
};
