export const PLACEHOLDER = {
  NAME: '주민등록상 실명 입력',
  BIRTHDAY: 'YYYY.MM.DD',
  SCHOOL: '소속 학교 선택',
  VERIFY: '학교 웹메일 입력',
  AUTH_CODE: '인증코드 6자리 입력',
  PASSWORD: '비밀번호 (문자/숫자/기호를 포함한 8자 이상)',
  PASSWORD_CONFIRM: '비밀번호 확인',
} as const;

export const EMAIL_REMAIN_TIME = 180 as const;

export const EMAIL_EXPIRED_MESSAGE = '인증 번호가 만료되었습니다.' as const;

export const SUPPORTING_TEXT = {
  NAME: '이름을 입력해주세요',
  BIRTH: '생년월일을 입력해주세요',
  EMAIL: '이메일을 입력해주세요',
  PASSWORD: '비밀번호를 입력해주세요',
  PASSWORD_CHECKER: '비밀번호 확인을 입력해주세요',
  PASSWORD_NO_EQUAL: '비밀번호가 일치하지 않습니다.',
} as const;
