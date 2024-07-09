import { blockStyle, spanStyle } from '@/page/archiving/component/TimeBlock/TimeBlock.style';

import { ReactNode } from 'react';

import Eclipse from '@/common/asset/svg/eclipse.svg?react';

interface TimeBlockProps {
  children: ReactNode;
  startDate: Date;
  endDate: Date;
  color: string;
}

const TimeBlock = ({ startDate, endDate, children, color }: TimeBlockProps) => {
  const blockWidth = (endDate.getDate() - startDate.getDate() + 1) * 6;
  const startPosition = startDate.getDate() - 1;
  console.log(blockWidth);
  console.log(startPosition);
  const level = 20;

  return (
    <>
      <div css={blockStyle(blockWidth, startPosition, level, color)}>
        <Eclipse width={47} height={47} css={{ flexShrink: 0 }} />
        <span css={spanStyle}>{children}</span>
      </div>
    </>
  );
};

export default TimeBlock;
