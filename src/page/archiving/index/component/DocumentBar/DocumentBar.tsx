/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { containerStyle } from '@/page/archiving/index/component/DocumentBar/DocumentBar.style';
import DocumentBarTab from '@/page/archiving/index/component/DocumentBarTab/DocumentBarTab';
import SelectedBlock from '@/page/archiving/index/component/SelectedBlock/SelectedBlock';
import TotalDocument from '@/page/archiving/index/component/TotalDocument/TotalDocument';
import { useBlockQuery } from '@/page/archiving/index/hook/api/useBlockQuery';
import { useTotalDocumentQuery } from '@/page/archiving/index/hook/api/useTotalDocumentQuery';
import { Block } from '@/page/archiving/index/type/blockType';
import { formattingDate } from '@/page/archiving/index/util/date';

import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';

type DocumentBarProps = {
  blockSelected?: Block;
  selectedId: string;
  handleSelectedId: (Id: string) => void;
  handleClose: () => void;
};

const DocumentBar = (
  { blockSelected, selectedId, handleSelectedId, handleClose }: DocumentBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [searchWord, setSearchWord] = useState('');

  const handleTabClick = (selectedId: string, tabId: string) => {
    if (tabId !== selectedId) {
      handleSelectedId(tabId);
    }
  };

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const { data: blockData } = useBlockQuery(9, blockSelected?.timeBlockId ?? 69, selectedId);
  const { data: documentData } = useTotalDocumentQuery(9, 'executive', selectedId);

  return (
    <aside onClick={(e) => e.stopPropagation()} css={containerStyle(blockSelected?.name || '')} ref={ref}>
      <DocumentBarTab selectedId={selectedId} onTabClick={handleTabClick} />
      {selectedId === 'selected'
        ? blockSelected && (
            <SelectedBlock
              selectedId={selectedId}
              blockName={blockSelected.name}
              startDate={formattingDate(blockSelected.startDate)}
              endDate={formattingDate(blockSelected.endDate)}
              documentList={blockData?.data.documents}
              blockSelected={blockSelected}
              handleClose={handleClose}
            />
          )
        : documentData && (
            <TotalDocument
              documentList={documentData?.data.documents}
              onSearchWord={handleSearchWord}
              searchWord={searchWord}
              selectedId={selectedId}
            />
          )}
    </aside>
  );
};

export default forwardRef(DocumentBar);
