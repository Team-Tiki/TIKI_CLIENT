import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { cancleStyle, deleteStyle } from '@/shared/component/DeleteModal/DeleteModal.style';
import { DELETE_DETAIL, DELETE_TITLE } from '@/shared/constant';

interface DeleteModalProps {
  title: 'block' | 'docs';
  detail: 'block' | 'docs';
  onClose: () => void;
}

const DeleteModal = ({ title, detail, onClose }: DeleteModalProps) => {
  const handleDeleteBlock = () => {
    //블록 삭제 api 추가
    onClose();
  };

  const handleDeleteDocs = () => {
    //문서 삭제 api 추가
    onClose();
  };

  const handleDelete = title === 'block' ? handleDeleteBlock : handleDeleteDocs;

  return (
    <Flex
      styles={{
        direction: 'column',
        align: 'center',
        justify: 'center',
        paddingRight: '9.35rem',
        paddingLeft: '9.35rem',
      }}>
      <Heading tag="H5" css={{ fontWeight: 600 }}>
        {DELETE_TITLE[title.toUpperCase() as keyof typeof DELETE_TITLE]}
      </Heading>
      <Text tag="body4" css={{ marginTop: '1rem', fontWeight: 400 }}>
        {DELETE_DETAIL[detail.toUpperCase() as keyof typeof DELETE_DETAIL]}
      </Text>

      <Flex styles={{ direction: 'row', align: 'center', justify: 'center', gap: '0.8rem', marginTop: '2.4rem' }}>
        <Button variant="secondary" size="large" onClick={onClose} css={cancleStyle}>
          취소
        </Button>
        <Button variant="primary" size="large" onClick={handleDelete} css={deleteStyle}>
          삭제
        </Button>
      </Flex>
    </Flex>
  );
};

export default DeleteModal;
