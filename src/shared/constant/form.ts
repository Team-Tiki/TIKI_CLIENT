export const PLACEHOLDER = {
  NAME: '주민등록상 실명 입력',
  BIRTHDAY: 'YYYY-MM-DD',
  SCHOOL: '소속 학교 선택',
  VERIFY: '학교 웹메일 입력',
  AUTH_CODE: '인증코드 6자리 입력',
  PASSWORD: '비밀번호 (문자/숫자/기호를 포함한 8자 이상)',
  PASSWORD_CONFIRM: '비밀번호 확인',
  SCHOOL_EMAIL: '학교 웹메일 입력',
} as const;

export const EMAIL_REMAIN_TIME = 180 as const;

export const SUPPORTING_TEXT = {
  NAME: '이름을 입력해주세요',
  BIRTH: '생년월일을 입력해주세요',

  EMAIL: '이메일을 입력해주세요',
  EMAIL_INVALID: '유효하지 않은 이메일 주소입니다.',
  EMAIL_SUCCESS: '메일을 성공적으로 전송하였습니다.',
  EMAIL_EXPIRED: '인증 번호가 만료되었습니다.',
  EMAIL_NOAUTH: '이메일을 인증해주세요.',

  UNIV: '대학교를 선택해주세요.',

  PASSWORD: '비밀번호를 입력해주세요',
  PASSWORD_INVALID: '영문/숫자/특수문자를 사용해 8자 이상으로 만들어주세요.',
  PASSWORD_CHECKER: '비밀번호 확인을 입력해주세요',
  PASSWORD_NO_EQUAL: '비밀번호가 일치하지 않습니다.',

  AUTHCODE_NO_EQUAL: '인증번호가 일치하지 않습니다.',
  AUTH_CODE: '회원 인증 메일이 전송되었습니다. 메일함에서 인증번호를 확인해주세요.',
} as const;

export const FORMATTED_DATE_MAXLENGTH = 10 as const;

export const DATE_MAXLENGTH = 8 as const;

export const AUTHCODE_MAXLENGTH = 6 as const;

export const UNIV_EMAIL_FORMAT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ac\.kr|edu)$/;

export const PASSWORD_VALID_FORMAT = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
