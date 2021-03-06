import { HttpException, HttpStatus } from '@nestjs/common';
import { createHttpExceptionBody } from '@nestjs/common/utils/http-exception-body.util';

export class EmailExistsException extends HttpException {
  constructor() {
    super(
      createHttpExceptionBody(
        'Email is already registered',
        'EMAIL_EXISTS_EXCEPTION',
        HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST,
    );
  }
}
