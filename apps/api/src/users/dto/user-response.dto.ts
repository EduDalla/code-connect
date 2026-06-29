import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: '9f2f7f0f-3e75-4f8b-8fae-b81fd2e7c54a' })
  id: string;

  @ApiProperty({ example: 'Ada Lovelace' })
  name: string;

  @ApiProperty({ example: 'ada@example.com' })
  email: string;

  @ApiProperty({ example: '2026-06-29T12:00:00.000Z' })
  createdAt: string;
}
