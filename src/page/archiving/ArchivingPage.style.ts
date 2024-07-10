import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const pageStyle = css({
  padding: '2.6rem 2.4rem',

  borderRadius: '16px',

  backgroundColor: theme.colors.gray_100,
});

export const headerStyle = css({
  display: 'flex',

  padding: '1.6rem 0rem 2.4rem 0rem',
});

export const sectionStyle = css({
  display: 'flex',

  flexDirection: 'column',
  gap: '2rem',

  overflow: 'hidden',
});

export const daySectionStyle = css({
  position: 'relative',
  display: 'flex',

  width: '104.6rem',
  height: '46.4rem',
  borderRadius: '6px',

  overflowX: 'scroll',

  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const buttonStyle = css({
  width: '13.2rem',

  marginLeft: 'auto',

  borderRadius: '28px',

  ...theme.text.body04,

  boxShadow: '0px 2px 10px 0px rgba(70, 109, 235, 0.30)',

  '&:hover': {
    backgroundColor: theme.colors.blue_300,
  },
});
