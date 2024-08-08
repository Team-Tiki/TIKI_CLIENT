import AdvBanner from '@/page/showcase/index/component/AdvBanner/AdvBanner';
import {
  arrowStyle,
  containerStyle,
  dotsContaierStyle,
} from '@/page/showcase/index/component/BannerSlider/BannerSlider.style';
import { ADVBANNER } from '@/page/showcase/index/constant/banner';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactNode, useMemo } from 'react';
import Slider from 'react-slick';

import LeftArrow from '@/common/asset/svg/arrow-left-white.svg?react';
import RightArrow from '@/common/asset/svg/arrow-right-white.svg?react';

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button type="button" onClick={onClick} css={[arrowStyle, { right: '1.6rem' }]}>
      <RightArrow width="1.6rem" height="1.6rem" />
    </button>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button type="button" onClick={onClick} css={[arrowStyle, { left: '1.6rem' }]}>
      <LeftArrow width="1.6rem" height="1.6rem" />
    </button>
  );
};

const BannerSlider = () => {
  const settings = useMemo(() => {
    return {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots: ReactNode) => (
        <ul className="dotsUl" css={dotsContaierStyle}>
          {dots}
        </ul>
      ),
      dotsStyle: 'dotsUl',
    };
  }, []);

  return (
    <Slider {...settings} css={containerStyle}>
      {ADVBANNER.map((advBanner) => (
        <AdvBanner
          key={advBanner.id}
          title={advBanner.name}
          detail={advBanner.overview}
          imageUrl={advBanner.imageUrl}
          externUrl={advBanner.externUrl}
        />
      ))}
    </Slider>
  );
};

export default BannerSlider;
