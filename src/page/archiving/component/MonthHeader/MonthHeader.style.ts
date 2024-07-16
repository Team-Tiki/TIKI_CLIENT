import { Block } from '@/page/archiving/type/blockType';
import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = (blockSelected: Block | undefined) =>
  css({
    display: 'flex',

    width: '100%',

    border: `2px solid ${theme.colors.gray_100}`,
    borderRadius: '8px',

    padding: '0.4rem',
    gap: blockSelected ? '2.4rem' : '4.4rem',
    transition: 'all 0.4s ease-in-out',
    backgroundColor: theme.colors.white,
  });

export const monthBtnStyle = css({
  padding: '1rem 1.2rem',

  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  ...theme.text.body06,

  transition: 'all 0.4s ease-in-out',

  '&:hover': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },

  '&:focus': {
    color: theme.colors.blue_900,
    backgroundColor: theme.colors.blue_100,
  },
});
