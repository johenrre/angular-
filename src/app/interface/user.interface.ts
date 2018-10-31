import { AccountStatus } from '~@enum/account-status.enum';
import { Authority } from '~@interface/authority.interface';

export interface User {
  /**
   * 用户 ID
   */
  id: number;

  /**
   * 昵称
   */
  username: string;
}

export type Users = User[];
