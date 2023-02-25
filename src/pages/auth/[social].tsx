import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { verifySocialAuthAsync } from '@/apis/auth';
import { setJwtTokenAtom } from '@/stores/actions';
import { SocialType } from '@/types/authTypes';

const SocialLogin = () => {
  const router = useRouter();
  const setJwtToken = useSetAtom(setJwtTokenAtom);

  useEffect(() => {
    if (!router.isReady) return;

    const verifySocialLogin = async () => {
      const code = router.query.code as string;
      const social = router.query.social as SocialType;
      const response = await verifySocialAuthAsync(social, code);

      // 성공적으로 인증 요청이 완료되었고, 서버로부터 JWT 를 인계 받았는지 확인
      if (response.isSuccess && response.result === null) {
        const { accessToken, refreshToken } = response.result;
        setJwtToken({ accessToken, refreshToken });
        router.replace('/');
        return;
      }
      router.replace('/login');
    };

    verifySocialLogin();
  }, [router]);
};

export default SocialLogin;
