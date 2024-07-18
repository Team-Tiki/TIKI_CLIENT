import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftArrow from '@/common/asset/svg/arrow-left.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right.svg?react';
import LogoSymbol from '@/common/asset/svg/logo_symbol.svg?react';
import Modal from '@/common/component/Modal/Modal';
import { useOverlay } from '@/common/hook';
import { useModal } from '@/common/hook/useModal';
import { useOutsideClick } from '@/common/hook/useOutsideClick';

import {
  LogoSymbolStyle,
  arrowStyle,
  containerStyle,
  leftSidebarListStyle,
} from '@/shared/component/LeftSidebar/LeftSidebar.style';
import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';
import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';
import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';
import WorkSpaceImage from '@/shared/component/createWorkSpace/image/WorkSpaceImage';
import WorkSpaceName from '@/shared/component/createWorkSpace/name/WorkSpaceName';
import { DEFAULT_LOGO } from '@/shared/constant';
import { useClubInfoQuery } from '@/shared/hook/api/useClubInfoQuery';
import { Team } from '@/shared/type/team';

import { usePostTeamMutation } from '../createWorkSpace/hook/api/usePostTeamMutation';

const LeftSidebar = () => {
  const { isOpen: isNavOpen, close, open } = useOverlay();
  const navigate = useNavigate();

  const sidebarRef = useOutsideClick(close);

  const { data, refetch } = useClubInfoQuery();

  // 모달 관련 상태
  const { isOpen, openModal, closeModal, setCurrentContent, currentContent } = useModal();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [fileUrlData, setFileUrlData] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const { mutateAsync: postTeamMutate } = usePostTeamMutation();

  const postData = {
    name: name,
    category: category,
    iconImageUrl: fileUrlData,
  };

  useEffect(() => {
    if (isComplete) {
      postTeamMutate(postData, {
        onSuccess: () => {
          refetch();
        },
      });
    }
  }, [isComplete]);

  const handleNext1 = () => setCurrentContent(<WorkSpaceCategory onNext={handleNext2} setCategory={setCategory} />);
  const handleNext2 = () => setCurrentContent(<WorkSpaceImage onNext={handleNext3} setFileUrlData={setFileUrlData} />);
  const handleNext3 = () => setCurrentContent(<WorkSpaceComplete setIsComplete={setIsComplete} />);

  return (
    <aside css={containerStyle(isNavOpen)} ref={sidebarRef} onClick={(e) => e.stopPropagation()}>
      {isNavOpen ? <LeftArrow css={arrowStyle} onClick={close} /> : <RightArrow css={arrowStyle} onClick={open} />}
      <LogoSymbol css={LogoSymbolStyle} />
      <nav>
        <ul css={leftSidebarListStyle}>
          <LeftSidebarItem
            isClicked={true}
            isExpansion={isNavOpen}
            url="src/common/asset/svg/earth.svg"
            onClick={() => {
              navigate('/showcase');
              close();
            }}>
            Showcase
          </LeftSidebarItem>
          {data?.data.belongTeamGetResponses.map((data: Team) => (
            <LeftSidebarItem
              key={data.id}
              isClicked={true}
              isExpansion={isNavOpen}
              url={data.iconImageUrl ? data.iconImageUrl : DEFAULT_LOGO}
              onClick={close}>
              {data.name}
            </LeftSidebarItem>
          ))}
          <LeftSidebarItem
            isClicked={true}
            isExpansion={isNavOpen}
            url="src/common/asset/svg/add.svg"
            onClick={() => {
              openModal(<WorkSpaceName onNext={handleNext1} setName={setName} />);
              close();
            }}>
            워크스페이스 생성
          </LeftSidebarItem>
        </ul>
      </nav>
      <Modal isOpen={isOpen} children={currentContent} onClose={closeModal} />
    </aside>
  );
};

export default LeftSidebar;
