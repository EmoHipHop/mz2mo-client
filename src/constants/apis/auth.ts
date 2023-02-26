const {
  NEXT_PUBLIC_KAKAO_CLIENT_ID: KAKAO_CLIENT_ID,
  NEXT_PUBLIC_KAKAO_REDIRECT_URL: KAKAO_REDIRECT_URL,
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_REDIRECT_URL: GOOGLE_REDIRECT_URL,
} = process.env;

export const SOCIAL_LOGIN_URL = {
  kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`,
  google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&scope=profile%20email&access_type=offline&response_type=code`,
};
