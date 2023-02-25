import { postAsync } from '@/apis/API';
import { AuthTokenType } from '@/stores/atoms';
import { ApiResult } from '@/types/apiTypes';
import { SocialType, LoginAsyncOutput } from '@/types/authTypes';
/**
 * 소셜 플랫폼으로부터 인계 받은 code를 넘겨 토큰을 받는 함수
 * @param social 인증을 진행한 소셜 플랫폼 타입
 * @param code 플랫폼으로부터 넘겨 받은 인증 코드
 * @returns 서버로부터 발급한 유저의 JWT
 */
export const verifySocialAuthAsync = async (
  social: SocialType,
  code: string,
) => {
  const response = await postAsync<AuthTokenType | null, any>(
    `/auth/verify/${social}`,
    {
      code,
    },
  );
  return response;
};

/**
 * 발급 받은 JWT 토큰을 통해 로그인을 진행하는 함수.
 * @param token JWT 액세스 토큰
 */
export async function loginAsync(
  social: SocialType,
  token: string,
): ApiResult<LoginAsyncOutput> {
  const response = await postAsync<LoginAsyncOutput, null>(
    `/auth/login/${social}`,
    null,
    {
      headers: {
        authorization: token,
      },
    },
  );

  return response;
}
