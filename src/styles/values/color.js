const colorPalette = {
  purple: {
    400: '#8227DF',
    300: '#9D42FB',
    200: '#B670FF',
    100: '#EDDBFF',
  },
  green: {
    500: '#09AE8D',
    400: '#00CC99',
    300: '#76DAB6',
    200: '#99E9CA',
    100: '#DFF6ED',
  },
  gray: {
    800: '#232323',
    700: '#5D5D5F',
    600: '#777777',
    500: '#959595',
    400: '#B2B2B2',
    300: '#D5D5D7',
    200: '#E7E7E7',
    100: '#F4F4F6',
  },
  red: {
    400: '#E91D50',
    300: '#FF3366',
    200: '#FFC1D0',
    100: '#FDE8ED',
  },
  white: '#FFFFFF',
  yellow: {
    300: '#FF9E11',
    200: '#FFC672',
    100: '#FFF6DF',
  },
  blue: {
    300: '#1598F8',
    200: '#51B6FF',
    100: '#B9DFFB',
    50: '#DFF1FF',
  },
}

export const color = {
  primary: {
    purple: colorPalette.purple,
  },
  sub: {
    green: colorPalette.green,
  },
  grayscale: {
    gray: colorPalette.gray,
    white: colorPalette.white,
  },
  system: {
    error: {
      red: colorPalette.red,
    },
    warning: {
      yellow: colorPalette.yellow,
    },
    success: {
      blue: colorPalette.blue,
    },
  },
  text: {
    default: colorPalette.gray[800],
  },
  border: {
    default: colorPalette.gray[200],
  },
  dark: {
    backgroundColor: '#232323',
    // borderColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    color: '#f4f4f7',
    roundColor: '#343434',
    iconColor: '#d5d5d7'
  },
}
