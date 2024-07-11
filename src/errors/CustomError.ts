class CustomError extends Error {
    constructor(message: string, public code: string) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  export class NotFoundError extends CustomError {
    constructor(message: string) {
      super(message, 'NOT_FOUND');
    }
  }
  
  export class BadRequestError extends CustomError {
    constructor(message: string) {
      super(message, 'BAD_REQUEST');
    }
  }
  