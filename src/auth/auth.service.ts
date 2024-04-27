import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt')


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne(username);
    
      const { password, ...result } = user;
      const isMatch = await bcrypt.compare(pass, user.password);

      if(isMatch){
          return result;
      }
      return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id};
    return {
      user_id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }

}
