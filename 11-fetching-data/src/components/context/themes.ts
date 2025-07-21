



export const lightTheme = {
  name: 'light',
  color: {
    background: '#fff',
    text: '#000',
    primary:'#007bff'
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  }
}

export const darkTheme = {
  name: 'dark',
  color: {
    background: '#1e1e1e',
    text: '#000',
    primary:'#1e90ff'
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  }
}


export type ThemeType = typeof lightTheme