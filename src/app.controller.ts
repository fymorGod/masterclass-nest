import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-rapository';

@Controller('app')
export class AppController {
  constructor(
    private rocketMembersRepository: RocketMembersRepository
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction} = body

    await this.rocketMembersRepository.create(name, memberFunction)
  } 
}
