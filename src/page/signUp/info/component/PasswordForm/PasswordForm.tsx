import { formStyle } from '@/page/signUp/info/component/InfoForm/InfoForm.style';
import { usePasswordForm } from '@/page/signUp/info/hook/common/usePasswordForm';

import { useLocation } from 'react-router-dom';

import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Input from '@/common/component/Input/Input';

import { PLACEHOLDER } from '@/shared/constant/form';

const PasswordForm = () => {
  const {
    state: { formData },
  } = useLocation();

  const { info, handleInfoChange, handleSubmit, error } = usePasswordForm(formData);

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <Flex styles={{ direction: 'column', width: '100%', gap: '1.2rem', grow: '1' }}>
        <Input
          type="password"
          isError={Boolean(error.password)}
          value={info.password}
          onChange={handleInfoChange('password')}
          variant="underline"
          label="비밀번호 설정"
          placeholder={PLACEHOLDER.PASSWORD}
        />
        <Input
          type="password"
          isError={Boolean(error.passwordChecker || error.password)}
          supportingText={error.passwordChecker || error.password}
          value={info.passwordChecker}
          onChange={handleInfoChange('passwordChecker')}
          variant="underline"
          placeholder={PLACEHOLDER.PASSWORD_CONFIRM}
        />
      </Flex>
      <Button type="submit" variant="primary" size="large">
        다음
      </Button>
    </form>
  );
};

export default PasswordForm;
