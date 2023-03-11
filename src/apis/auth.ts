import { postAsync } from '@/apis/API';
import { AuthTokenType } from '@/stores/atoms';
import { ApiResult } from '@/types/apiTypes';
import { SocialType } from '@/types/authTypes';
/**
 * 소셜 플랫폼으로부터 인계 받은 code를 넘겨 토큰을 받는 함수
 * @param social 인증을 진행한 소셜 플랫폼 타입
 * @param code 플랫폼으로부터 넘겨 받은 인증 코드
 * @returns 서버로부터 발급한 유저의 JWT
 */
export const verifySocialAuthAsync = async (
  social: SocialType,
  code: string,
): ApiResult<AuthTokenType | null> => {
  const response = await postAsync<AuthTokenType | null, any>(
    `/users/login-tokens/oauth/${social}`,
    {
      code,
    },
  );
  return response;
};
