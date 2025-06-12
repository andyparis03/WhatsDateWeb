module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bahnschrift', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#2B2B2B',
        'secondary': '#666666',
        'accent': '#000000',
        'light-gray': '#F5F5F5',
        'medium-gray': '#E5E5E5',
        'border-neutral': '#EEEEEE',
        'text-muted': '#888888',
      },
      fontSize: {
        'title': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subtitle': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'paragraph': ['20px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
}; 