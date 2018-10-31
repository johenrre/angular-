/**
 * JWT 中的 Payload
 */
export interface Payload {
  /**
   * 用户 ID
   */
  id: number;

  /**
   * JWT 签发时间
   */
  iat: number;

  /**
   * JWT 过期时间
   */
  exp: number;
}
