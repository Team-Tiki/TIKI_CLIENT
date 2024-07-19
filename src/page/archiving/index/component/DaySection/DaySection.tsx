import {
  bodyStyle,
  dayHeaderStyle,
  dayStyle,
  selectedDayStyle,
} from '@/page/archiving/index/component/DaySection/DaySection.style';

import Circle from '@/common/asset/svg/circle.svg?react';
import Flex from '@/common/component/Flex/Flex';
import { theme } from '@/common/style/theme/theme';

interface DaySectionProps {
  day: number;
  isEven: boolean;
  isToday: boolean;
}
const DottedDayLine = () => {
  const element = document.getElementById('block_area');

  if (!element) return null;

  const sectionHeight = element.scrollHeight;

  return (
    <div
      css={{
        position: 'absolute',
        top: '3.2rem',
        right: '2.8rem',

        width: '0.2rem',
        height: `${sectionHeight / 10}rem`,

        borderLeft: `1px dashed ${theme.colors.black}`,
      }}
    />
  );
};

const DaySection = ({ day, isEven, isToday }: DaySectionProps) => {
  return (
    <Flex css={dayStyle(isEven)}>
      <Flex css={dayHeaderStyle}>{day}</Flex>
      <Flex css={bodyStyle(isEven)} />
      {isToday && (
        <>
          <Circle width={8} height={8} css={selectedDayStyle} />
          <DottedDayLine />
        </>
      )}
    </Flex>
  );
};

export default DaySection;
