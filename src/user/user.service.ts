import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private usernames: string[] = ['pviara'];

  userExists(givenUsername: string): boolean {
    return this.usernames.some((username) => givenUsername === username);
  }
}
