import { blockStyle, spanStyle } from '@/page/archiving/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

import Eclipse from '@/common/asset/svg/eclipse.svg?react';

interface TimeBlockProps {
  children: ReactNode;
  width: number;
}

const TimeBlock = ({ children, width }: TimeBlockProps) => {
  return (
    <>
      <div css={blockStyle(width)}>
        <Eclipse width={47} height={47} css={{ flexShrink: 0 }} />
        <span css={spanStyle}>{children}</span>
      </div>
    </>
  );
};

export default TimeBlock;