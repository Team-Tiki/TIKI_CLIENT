import { useEffect, useState } from 'react';

import ArrowDown from '@/common/asset/arrow-down.svg?react';
import Button from '@/common/component/Button/Button';
import Select from '@/common/component/Select/Select';
import { useOutsideClick, useOverlay } from '@/common/hook';

import {
  arrowStyle,
  selectButtonStyle,
  selectedTextStyle,
} from '@/shared/component/createWorkSpace/category/WorkSpaceCategory.style';
import WorkSapceInfo from '@/shared/component/createWorkSpace/info/WorkSpaceInfo';
import { buttonStyle, sectionStyle } from '@/shared/component/createWorkSpace/name/WorkSpaceName.style';

interface WorkSpaceCategoryProps {}

const WorkSpaceCategory = ({}: WorkSpaceCategoryProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const [selected, setSelected] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    close?.();
  }, [selected, close]);

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  useEffect(() => {
    setIsButtonActive(selected.trim().length > 0);
  }, [selected]);

  return (
    <section css={sectionStyle}>
      <WorkSapceInfo step={2} title="새로운 워크 스페이스 생성하기" info="팀 카테고리를 선택해주세요." />
      <div css={{ width: '32rem', marginTop: '2.4rem' }}>
        <Select
          ref={ref}
          isOpen={isOpen}
          onSelect={handleSelect}
          options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7']}
          trigger={
            <Button css={selectButtonStyle(isOpen)} onClick={toggle}>
              <span css={selected ? selectedTextStyle : null}>{selected || '선택'}</span>
              <ArrowDown css={arrowStyle(isOpen)} />
            </Button>
          }
        />
      </div>
      <Button variant="primary" size="medium" css={buttonStyle(isButtonActive)} disabled={!isButtonActive}>
        다음
      </Button>
    </section>
  );
};

export default WorkSpaceCategory;