const colors = {
  black: '#2C3030',
  gray_800: '#56585D',
  gray_700: '#6B6B6B',
  gray_600: '#909090',
  gray_500: '#ADADAD',
  gray_400: '#CDCDCD',
  gray_300: '#D6D5D5',
  gray_200: '#EBEBEB',
  gray_100: '#FAFAFA',
  white: '#FFFFFF',
  blue_100: '#466DEB',
  blue_10: '#EDF0FD',
  red: '#FE4F60',
};

export type ColorsTypes = typeof colors;

const heading = {
  heading01: {
    fontSize: '4rem',
    lineHeight: '4rem',
  },
  heading02: {
    fontSize: '3.2rem',
    lineHeight: '3.2rem',
  },
  heading03: {
    fontSize: '2.8rem',
    lineHeight: '2.8rem',
  },
  heading04: {
    fontSize: '2.4rem',
    lineHeight: '2.4rem',
  },
  heading05: {
    fontSize: '2rem',
    lineHeight: '2rem',
  },
  heading06: {
    fontSize: '1.8rem',
    lineHeight: '1.8rem',
  },
  heading07: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
} as const;

const text = {
  body01: {
    fontSize: '2.4rem',
    lineHeight: '2.4rem',
  },
  body02: {
    fontSize: '2rem',
    lineHeight: '2rem',
  },
  body03: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
  body04: {
    fontSize: '1.6rem',
    lineHeight: '2.24rem',
  },
  body05: {
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
  },
  body06: {
    fontSize: '1.4rem',
    lineHeight: '1.96rem',
  },
  body07: {
    fontSize: '1.4rem',
    lineHeight: '1.68rem',
  },
} as const;

const label = {
  label01: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
  label02: {
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
  },
  label03: {
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
  },
} as const;

const button = {
  button01: {
    fontsize: '1.6rem',
    lineHeight: '1.6rem',
  },
  button02: {
    fontSize: '1.4rem',
    lineHeight: '1.4rem',
  },
} as const;

const zIndex = {
  overlayTop: 4,
  overlayHigh: 3,
  overlayMiddle: 2,
  overlayBottom: 1,
} as const;

export const theme = {
  colors,
  heading,
  text,
  label,
  zIndex,
};
