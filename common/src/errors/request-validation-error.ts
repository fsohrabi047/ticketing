import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import {FieldValidationError} from "express-validator/src/base";
import * as path from "path";

type ValidationErr = Partial<ValidationError> & { path?: string, value?: string }
export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationErr[]) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.path, value: err.value };
    });
  }
}
