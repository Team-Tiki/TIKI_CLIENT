import {
  buttonStyle,
  contentStyle,
  daySectionStyle,
  headerStyle,
  pageStyle,
} from '@/page/archiving/ArchivingPage.style';
import DaySection from '@/page/archiving/component/DaySection/DaySection';
import BlockModal from '@/page/archiving/component/Modal/Block/BlockModal';
import UploadModal from '@/page/archiving/component/Modal/Upload/UploadModal';
import MonthHeader from '@/page/archiving/component/MonthHeader/MonthHeader';
import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import { TIME_BLOCK } from '@/page/archiving/constant/timeBlock';
import { MonthType } from '@/page/archiving/type/monthType';
import { alignBlocks } from '@/page/archiving/util/alignBlocks';
import { getMonthDate } from '@/page/archiving/util/getMonthDate';
import { getRandomColor } from '@/page/archiving/util/getRandomColor';
import { endOfMonth } from 'date-fns';

import { useState } from 'react';

import AddIc from '@/common/asset/svg/add_btn.svg?react';
import PreviousYearArrow from '@/common/asset/svg/arrow_left.svg?react';
import NextYearArrow from '@/common/asset/svg/arrow_right.svg?react';
import Calendar from '@/common/asset/svg/calendar.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook/useModal';

const ArchivingPage = () => {
  const currentDate = new Date();

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<MonthType>(`${currentDate.getMonth() + 1}월` as MonthType);
  const [clickedDay, setClickedDay] = useState<number | null>(null);

  const dateOfMonth = getMonthDate(selectedMonth, currentYear);
  const endDay = endOfMonth(dateOfMonth);

  const blockFloors = alignBlocks(endDay, selectedMonth, currentYear);

  // 블록 생성 모달 관련 코드
  const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();

  const handleNext = () => setCurrentContent(<UploadModal onClose={closeModal} />);

  return (
    <>
      <section css={{ padding: '0rem 13.2rem 6.2rem 5.2rem', flexDirection: 'column' }}>
        <div css={pageStyle}>
          <header css={headerStyle}>
            <Heading tag="H4" css={{ marginRight: '1.6rem', marginTop: '0.4rem' }}>
              타임라인
            </Heading>
            <Flex styles={{ align: 'center', gap: '0.8rem' }}>
              <Calendar width={24} height={24} />
              <PreviousYearArrow
                width={16}
                height={16}
                onClick={() => setCurrentYear(currentYear - 1)}
                css={{ cursor: 'pointer' }}
              />
              <Text tag="body1" css={{ marginTop: '0.4rem' }}>
                {currentYear}
              </Text>
              <NextYearArrow
                width={16}
                height={16}
                onClick={() => setCurrentYear(currentYear + 1)}
                css={{ cursor: 'pointer' }}
              />
            </Flex>
          </header>
          <Flex css={contentStyle}>
            <MonthHeader
              onMonthClick={(month: MonthType) => {
                setSelectedMonth(month);
                setClickedDay(null);
              }}
            />
            <div css={daySectionStyle}>
              {Array.from({ length: endDay.getDate() }, (_, index) => {
                const day = index + 1;
                const isEven = day % 2 === 0;
                const isClicked = clickedDay === day;
                return (
                  <DaySection
                    key={day}
                    day={day}
                    isClicked={isClicked}
                    isEven={isEven}
                    onDayClick={() => setClickedDay(day)}
                  />
                );
              })}
              {TIME_BLOCK.filter((block) => {
                const blockMonth = block.startDate.getMonth() + 1;
                const clickedMonth = parseInt(selectedMonth.split('월')[0]);

                return blockMonth === clickedMonth && block.startDate.getFullYear() === currentYear;
              }).map((block) => (
                <TimeBlock
                  key={block.id}
                  startDate={block.startDate}
                  endDate={block.endDate}
                  color={getRandomColor()}
                  floor={blockFloors[block.id] || 1}>
                  {block.name}
                </TimeBlock>
              ))}
            </div>
          </Flex>
        </div>
      </section>
      <Flex styles={{ paddingRight: '2rem', marginLeft: 'auto' }}>
        <Button variant="action" css={buttonStyle} onClick={() => openModal(<BlockModal onNext={handleNext} />)}>
          <AddIc width={24} height={24} />
          블록 생성
        </Button>
      </Flex>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </>
  );
};

export default ArchivingPage;
