import { chipStyle, clubProfileStyle, containerStyle } from '@/page/showcase/index/ShowcasePage.style';
import BannerSlider from '@/page/showcase/index/component/BannerSlider/BannerSlider';
import CategoryChip from '@/page/showcase/index/component/CategoryChip/CategoryChip';
import ClubProfileCard from '@/page/showcase/index/component/ClubProfileCard/ClubProfileCard';
import { useClubListQuery } from '@/page/showcase/index/hook/api/useClubListQuery';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { PATH } from '@/shared/constant/path';
import useCategoryListQuery from '@/shared/hook/api/useCategoryListQuery';

const ShowcasePage = () => {
  const navigate = useNavigate();
  const [selectedChip, setSelectedChip] = useState('전체');

  const { data: categoryList } = useCategoryListQuery();
  const { data: clubs } = useClubListQuery(selectedChip);

  return (
    <section css={containerStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '2.4rem', width: '100%' }}>
        <Heading tag="H4" css={{ fontWeight: 600 }}>
          우리 학교 동아리
        </Heading>
        <BannerSlider />
      </Flex>

      <div css={chipStyle}>
        {categoryList.data.categories.map((category, index) => (
          <CategoryChip
            key={index}
            onClick={() => {
              setSelectedChip(category);
            }}
            isSelected={selectedChip === category}>
            {category}
          </CategoryChip>
        ))}
      </div>

      <section css={clubProfileStyle}>
        {clubs?.data.teams.map((club) => {
          return (
            <ClubProfileCard
              key={club.teamId}
              title={club.name}
              detail={club.overview || ''}
              imageUrl={club.imageUrl}
              onClick={() => {
                navigate(PATH.COMING_SOON);
              }}
            />
          );
        })}
      </section>
    </section>
  );
};

export default ShowcasePage;
