import { pageStyle } from '@/page/signUp/info/InfoFormPage.style';
import InfoForm from '@/page/signUp/info/component/InfoForm/InfoForm';
import PasswordForm from '@/page/signUp/info/component/PasswordForm/PasswordForm';

import { useMatch } from 'react-router-dom';

import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';

import { PATH } from '@/shared/constant/path';

const InfoFormPage = () => {
  const isInfoMatched = useMatch(PATH.SIGNUP_INFO);
  const isPasswordMatched = useMatch(PATH.SIGNUP_PASSWORD);

  return (
    <Flex tag="main" css={pageStyle}>
      <Flex tag="section" styles={{ direction: 'column', gap: '3.2rem', width: '51.1rem' }}>
        <Heading css={{ padding: '1.6rem 0' }}>회원가입</Heading>

        {isInfoMatched && <InfoForm />}

        {isPasswordMatched && <PasswordForm />}
      </Flex>
    </Flex>
  );
};

export default InfoFormPage;
