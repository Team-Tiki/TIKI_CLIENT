import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const imageBoxStyle = css({
  position: 'relative',

  marginTop: '2.4rem',
});

export const imageAddStyle = css({
  width: '20rem',
  height: '20rem',

  cursor: 'pointer',
});

export const imageDeleteStyle = css({
  position: 'absolute',
  top: '0',
  right: '0',

  width: '3.3rem',
  height: '3.2rem',

  cursor: 'pointer',
});

export const buttonCompleteStyle = css({
  marginTop: '4.8rem',

  width: '32rem',

  cursor: 'pointer',

  '&:hover': {
    color: theme.colors.gray_500,
  },
});

export const buttonSkipStyle = css({
  border: 'none',

  marginTop: '2.4rem',

  backgroundColor: 'transparent',
  color: theme.colors.gray_500,

  cursor: 'pointer',

  ...theme.text.body06,

  textDecoration: 'underline',
});