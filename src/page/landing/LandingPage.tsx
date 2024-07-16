import {
  featureSectionStyle,
  firstImgWrapperStyle,
  hideStyle,
  landingStyle,
  secondImgWrapperStyle,
  sectionStyle,
  startedButtonStyle,
  textWrapperStyle,
  viewImgStyle,
} from '@/page/landing/LandingPage.style';
import LandingOverview from '@/page/landing/component/Overview/Overview';
import { TEXT } from '@/page/landing/constant';

import { useNavigate } from 'react-router-dom';

import firstCharacter from '@/common/asset/img/landing01.png';
import secondCharacter from '@/common/asset/img/landing02.png';
import firstView from '@/common/asset/img/service01.png';
import secondView from '@/common/asset/img/service02.png';
import ArrowDown from '@/common/asset/svg/arrow-down.svg?react';
import Button from '@/common/component/Button/Button';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { useIntersectionObserver } from '@/common/hook/useObserver';

import { PATH } from '@/shared/constant/path';

const LandingPage = () => {
  const handleObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('observer_shown');

        observer.unobserve(entry.target);
      }
    });
  };
  const option = {
    root: document.getElementById('landing_view'),
    threshold: 0.5,
  };

  const { targetRef: overviewRef } = useIntersectionObserver(handleObserve, option);
  const { targetRef: feature1Ref } = useIntersectionObserver(handleObserve, option);
  const { targetRef: feature2Ref } = useIntersectionObserver(handleObserve, option);

  const navigate = useNavigate();

  const 로그인페이지로 = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <div id="landing_view" css={landingStyle}>
      <section css={sectionStyle}>
        <Heading tag="H1">{TEXT.LANDING_TITLE}</Heading>
        <Heading tag="H2" css={{ fontWeight: 500 }}>
          {TEXT.LANDING_SUBTITLE}
        </Heading>
        <Button onClick={로그인페이지로} css={startedButtonStyle} variant="action">
          시작하기
        </Button>
        <ArrowDown />
      </section>
      <LandingOverview ref={overviewRef} />
      <section ref={feature1Ref} css={[featureSectionStyle, { textAlign: 'end' }]}>
        <div css={textWrapperStyle}>
          <Heading css={hideStyle} tag="H1">
            {TEXT.FEATURE_HEADING.FIRST}
          </Heading>
          <Text tag="body2" css={[hideStyle, { fontWeight: 400, whiteSpace: 'pre-line' }]}>
            {TEXT.FEATURE_CONTENT.FIRST}
          </Text>
        </div>
        <div css={firstImgWrapperStyle}>
          <img
            css={{
              width: '15%',
              height: '30%',
            }}
            src={firstCharacter}
            alt="티키 캐릭터 1"
          />
          <img css={viewImgStyle} src={firstView} alt="서비스 뷰 1" />
        </div>
      </section>
      <section ref={feature2Ref} css={[featureSectionStyle, { textAlign: 'start' }]}>
        <div css={textWrapperStyle}>
          <Heading css={hideStyle} tag="H1">
            {TEXT.FEATURE_HEADING.SECOND}
          </Heading>
          <Text tag="body2" css={[hideStyle, { fontWeight: 400, whiteSpace: 'pre-line' }]}>
            {TEXT.FEATURE_CONTENT.SECOND}
          </Text>
        </div>

        <div css={secondImgWrapperStyle}>
          <img css={{ width: '30%', height: '30%', placeSelf: 'end' }} src={secondCharacter} alt="티키 캐릭터 2" />
          <img css={viewImgStyle} src={secondView} alt="서비스 뷰 2" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
