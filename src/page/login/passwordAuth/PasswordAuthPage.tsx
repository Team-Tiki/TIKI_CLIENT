import useTimer from '@/page/login/hook/useTimer';
import { formStyle, pageStyle, timestyle } from '@/page/login/passwordAuth/PasswordAuthPage.style';
import { validateCode, validateEmail } from '@/page/login/util/validateInput';
import { PLACEHOLDER, SUPPORTING_TEXT } from '@/page/signUp/info/constant';
import { formatTime } from '@/page/signUp/info/util/formatTime';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import SupportingText from '@/common/component/SupportingText/SupportingText';

import { useSendMailMutation } from '@/shared/hook/useSendMailMutation';
import { useVerifyCodeMutation } from '@/shared/hook/useVerifyCodeMutation';

const PasswordAuthPage = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');

  const { time: remainTime, startTimer, stopTimer } = useTimer(180);
  const navigate = useNavigate();
  const sendMail = useSendMailMutation(email);
  const verifyCode = useVerifyCodeMutation(email, authCode);

  const handleMailSend = useCallback(() => {
    if (validateEmail(email)) setIsMailSent(true);
    startTimer();
    sendMail();
  }, [sendMail, startTimer, email]);

  const handleVerifyCode = useCallback(() => {
    if (validateCode(authCode)) {
      verifyCode();
      stopTimer();
      setAuthCode(authCode);
    }
  }, [verifyCode, stopTimer, authCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMailSent || !authCode) return false;

    navigate('/password/reset');
  };

  return (
    <Flex style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Flex tag="section" css={pageStyle}>
        <Heading css={{ padding: '1.6rem 0', alignItems: 'start' }}>비밀번호 재설정</Heading>
        <form css={[formStyle, { width: '51.1rem', height: '78rem' }]} onSubmit={handleSubmit}>
          <Flex styles={{ direction: 'column', width: '100%', gap: '1.6rem', justify: 'space-between' }}>
            <Flex styles={{ align: 'end', width: '100%', gap: '0.8rem' }}>
              <Input
                variant="underline"
                label="회원 정보"
                placeholder={PLACEHOLDER.SCHOOL_EMAIL}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button css={{ width: '11.1rem' }} size="large" onClick={handleMailSend} disabled={!validateEmail(email)}>
                인증 메일 발송
              </Button>
            </Flex>
            {isMailSent && (
              <>
                <SupportingText isNotice={true}>{SUPPORTING_TEXT.AUTH_CODE}</SupportingText>
                <Flex
                  styles={{
                    align: 'end',
                    justify: 'space-between',
                    width: '100%',
                    marginTop: '1.6rem',
                    gap: '1.6rem',
                  }}>
                  <Input
                    variant="underline"
                    label="인증 코드"
                    placeholder={PLACEHOLDER.AUTH_CODE}
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                  />
                  <span css={timestyle}>{formatTime(remainTime)}</span>
                  <Button
                    css={{ width: '13rem' }}
                    size="large"
                    onClick={handleVerifyCode}
                    disabled={!validateCode(authCode)}>
                    인증하기
                  </Button>
                </Flex>
              </>
            )}
          </Flex>
          <Button type="submit" variant="primary" size="large" disabled={!isMailSent || !validateCode(authCode)}>
            완료
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default PasswordAuthPage;
