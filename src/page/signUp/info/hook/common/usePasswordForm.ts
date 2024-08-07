import { useSignupMutation } from '@/page/signUp/info/hook/api/useSignupMutation';
import { InfoFormData } from '@/page/signUp/info/hook/common/useInfoForm';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { useError } from '@/common/hook';

import { UserInfo } from '@/shared/api/signup/info/type';
import { PASSWORD_VALID_FORMAT, SUPPORTING_TEXT } from '@/shared/constant/form';
import { hasKeyInObject } from '@/shared/util/typeGuard';

type PasswordFormData = Omit<UserInfo, keyof InfoFormData>;

export const usePasswordForm = (prevData: InfoFormData) => {
  const [info, setInfo] = useState<PasswordFormData>({ password: '', passwordChecker: '' });

  const { error, setErrors, updateFieldError, clearFieldError } = useError({ password: '', passwordChecker: '' });

  const { mutate: signUpMutate } = useSignupMutation();

  const handleInfoChange = useCallback(
    (key: keyof PasswordFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setInfo((prev) => ({
        ...prev,
        [key]: value,
      }));
      if (value !== '' && hasKeyInObject(error, key)) {
        clearFieldError(key);
      }
    },
    [error, clearFieldError]
  );

  const validateForm = useCallback(() => {
    if (info.password === '') {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD);

      return false;
    }

    if (info.passwordChecker === '') {
      updateFieldError('passwordChecker', SUPPORTING_TEXT.PASSWORD_CHECKER);

      return false;
    }

    if (info.password !== info.passwordChecker) {
      setErrors({
        password: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
        passwordChecker: SUPPORTING_TEXT.PASSWORD_NO_EQUAL,
      });

      return false;
    }

    if (!PASSWORD_VALID_FORMAT.test(info.password)) {
      updateFieldError('password', SUPPORTING_TEXT.PASSWORD_INVALID);

      return false;
    }

    return true;
  }, [info, updateFieldError, setErrors]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm()) return;

      const formData: UserInfo = {
        ...prevData,
        password: info.password,
        passwordChecker: info.passwordChecker,
      };

      signUpMutate(formData);
    },
    [validateForm, info, signUpMutate, prevData]
  );

  return {
    info,
    handleInfoChange,
    handleSubmit,
    error,
  };
};
