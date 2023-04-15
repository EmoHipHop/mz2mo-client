/**
 * API 호출 과정에서 발생한 에러 정보 관련 interface
 */
interface ApiErrorFieldData {
  /** 에러를 발생시킨 field 요소 */
  field: string;
  /** 해당 field에서 발생한 구체적인 에러 원인 */
  msg: string;
}

/**
 * API 호출 과정에서 발생한 에러와 관련된 interface
 */
export interface ApiError {
  /** 백엔드 측에서 전송한 HTTP Status Code */
  code: number;
  /** 백엔드 측에서 전송한 에러 관련 메세지 */
  msg: string;
  /** 백엔드 측에서 전송한 에러 관련 데이터 */
  data?: {
    errors: ApiErrorFieldData[];
  };
}

/**
 * API 호출 결과 (성공, 실패) 를 나타내는 type
 * @param T 요청 성공 시 인계 받은 데이터 타입
 */
export type ApiResult<T> = Promise<
  { isSuccess: true; result: T } | { isSuccess: false; result: ApiError }
>;

/**
 * types/index.ts에는 import를 했지만 존재하지 않아서, 임시 제작
 *
 */
export interface ApiSuccess {}
