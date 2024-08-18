import { Controller, Get, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('me')
  GetmyUser(): string {
    return 'Этот метод данные моего пользователя';
  }
  @Patch('me') patchMyUser(): string {
    return 'изменить параметры своего пользователя';
  }

  @Get(':username')
  getCurrentUser(): string {
    return 'Получить определенного пользователя';
  }
}
