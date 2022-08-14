import { Request, Response } from 'express';
import { IReadKeepTalkingDiscountUseCase } from '../../domain/useCases/KeepTalkingDiscountUseCases/ReadKeepTalkingDiscountUseCase';

export class ReadKeepTalkingDiscountController {
  constructor(private readKeepTalkingDiscountUseCase: IReadKeepTalkingDiscountUseCase) {}

  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const keepTalkingDiscountList = await this.readKeepTalkingDiscountUseCase.execute();

      return response.status(200).send({
        status: 'success',
        response: keepTalkingDiscountList,
        code: 0,
      });
    } catch (error) {
      const { message } = error as { message: string };
      return response.status(400).send({
        message: message || 'Unexpected error.',
        status: 'error',
        code: -1,
      });
    }
  }
}
