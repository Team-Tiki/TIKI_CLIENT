import DocumentItem from '@/page/archiving/component/DocumentItem/DocumentItem';
import { documentListStyle } from '@/page/archiving/component/TotalDocument/TotalDocument.style';
import { Block } from '@/page/archiving/type/blockType';
import { DocumentType } from '@/page/archiving/type/documentType';

import Laptop from '@/common/asset/svg/laptop.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Modal from '@/common/component/Modal/Modal';
import Text from '@/common/component/Text/Text';
import { useModal } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import DeleteModal from '@/shared/component/DeleteModal/DeleteModal';

import { blockNameStyle, containerStyle, deleteBtnStyle } from './SelectedBlock.style';

interface DocumentBarInfoProps {
  selectedId: string;
  blockName: string;
  startDate: string;
  endDate: string;
  color: string;
  documentList?: DocumentType[];
  blockSelected: Block;
}

const SelectedBlock = ({
  selectedId,
  blockName,
  color,
  startDate,
  endDate,
  documentList,
  blockSelected,
}: DocumentBarInfoProps) => {
  const { isOpen, openModal, closeModal, currentContent } = useModal();

  return (
    <Flex tag="section" css={containerStyle}>
      <Laptop width={24} height={24} />
      <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
        <Heading tag="H6" css={blockNameStyle}>
          {blockName}
        </Heading>
        <Button
          variant="text"
          size="small"
          css={deleteBtnStyle}
          onClick={() =>
            openModal(
              <DeleteModal
                title="block"
                detail="block"
                onClose={closeModal}
                teamId={9}
                id={blockSelected.timeBlockId}
              />
            )
          }>
          블록삭제
        </Button>
      </Flex>
      <Text tag="body6" css={{ color: theme.colors.gray_800 }}>
        {startDate} ~ {endDate}
      </Text>

      <Flex tag="ul" css={documentListStyle}>
        {documentList?.map((data: DocumentType) => (
          <DocumentItem
            key={data.documentId}
            documentId={data.documentId}
            selectedId={selectedId}
            blockName={data.blockName}
            color={color}>
            {data.fileName}
          </DocumentItem>
        ))}
      </Flex>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </Flex>
  );
};

export default SelectedBlock;
