import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  width: '100%',
  minWidth: '25rem',

  borderRadius: '16px',

  overflow: 'hidden',
});

export const arrowStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  top: '9.6rem',

  zIndex: theme.zIndex.overlayBottom,

  width: '3.2rem',
  height: '3.2rem',

  border: 'none',
  borderRadius: '16px',

  background: 'rgb(0,0,0,0.3)',

  cursor: 'pointer',
});

export const dotsContaierStyle = css({
  position: 'absolute',
  bottom: '1rem',

  '& > li': {
    width: '0.5rem',
  },

  '& > li button:before': {
    color: theme.colors.white,
    opacity: 0.3,
  },
  '& > li:hover': {
    '& > button:before': { color: theme.colors.white, opacity: 0.8 },
  },

  '& > li.slick-active button:before': {
    color: theme.colors.white,
    opacity: 0.8,
  },
});
