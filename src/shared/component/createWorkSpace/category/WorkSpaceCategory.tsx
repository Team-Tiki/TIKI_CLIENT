import { useEffect, useState } from 'react';

import ArrowDown from '@/common/asset/svg/arrow_drop_down.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import {
  arrowStyle,
  selectButtonStyle,
  selectedTextStyle,
} from '@/shared/component/createWorkSpace/category/WorkSpaceCategory.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { buttonStyle, sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';
import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';

interface WorkSpaceCategoryProps {
  onNext: () => void;
  onCategory: (category: string) => void;
}

const WorkSpaceCategory = ({ onNext, onCategory }: WorkSpaceCategoryProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const [selected, setSelected] = useState('');

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!ref.current || !(event.target instanceof HTMLElement)) return;
      const isOutside = !ref.current.contains(event.target as Node);

      if (isOutside && !event.target?.className.includes('select-container')) {
        close?.();
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleMouseDown);
    } else {
      window.removeEventListener('mousedown', handleMouseDown);
    }

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, close, ref]);

  // 카테고리 데이터
  const { data } = useCategoryListQuery();
  const categoryList = data.data.categories.filter((category) => category !== '전체');

  useEffect(() => {
    if (selected) {
      onCategory(selected);
    }
    close?.();
  }, [selected, onCategory, close]);

  const handleSelect = (id: string) => {
    setSelected(id);
    onCategory(id);
  };

  const isButtonActive = selected.trim().length > 0;

  return (
    <Flex tag={'section'} styles={{ direction: 'column', justify: 'center', align: 'center' }} css={sectionStyle}>
      <WorkSapceInfo step="category" title="새로운 워크 스페이스 생성하기" info="팀 카테고리를 선택해주세요." />
      <div css={{ width: '32rem', height: '7.6rem' }} ref={ref}>
        <Select
          css={{
            '& ul': {
              maxHeight: '25rem',
            },
          }}
          isOpen={isOpen}
          onSelect={handleSelect}
          options={categoryList}
          className="select-container"
          trigger={
            <Button css={selectButtonStyle(isOpen)} onClick={toggle}>
              <span css={selected ? selectedTextStyle : null}>{selected || '선택'}</span>
              <ArrowDown css={arrowStyle(isOpen)} />
            </Button>
          }
        />
      </div>
      <Button
        variant="primary"
        size="medium"
        css={buttonStyle(isButtonActive)}
        disabled={!isButtonActive}
        onClick={onNext}>
        다음
      </Button>
    </Flex>
  );
};

export default WorkSpaceCategory;
