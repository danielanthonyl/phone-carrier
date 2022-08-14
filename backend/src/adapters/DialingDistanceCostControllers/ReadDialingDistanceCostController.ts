import { Request, Response } from 'express';
import { IReadDistanceDialingCostDTO } from '../../domain/DTOs/DistanceDialingCostDTO/IReadDistanceDialingCost';
import { IReadDistanceDialingCostUseCase } from '../../domain/useCases/DistanceDialingCostUseCases/ReadDistanceDialingCostUseCase';

export class ReadDistanceDialingCostController {
  constructor(private readDistanceDialingCostUseCase: IReadDistanceDialingCostUseCase) {}

  async handle(request: Request, response: Response) {
    const { origin, destiny, minutes, discountId } = request.query as unknown as IReadDistanceDialingCostDTO;

    try {
      if (!origin || !destiny || !minutes || !discountId) {
        return response.status(400).send({
          status: 'error',
          message:
            'origin, destiny, minutes and discountId are required. The query structure is: /url?origin=value&destiny=value&minutes=value&discountId=value',
          code: -1,
        });
      }

      const distanceDialingCostList = await this.readDistanceDialingCostUseCase.execute({
        origin,
        destiny,
        minutes: Number(minutes),
        discountId,
      });

      return response.status(200).send({
        status: 'success',
        response: distanceDialingCostList,
        code: 0,
      });
    } catch (error) {
      const { message } = error as { message: string };

      return response.status(400).send({
        status: 'error',
        message: message || 'Unexpected error',
      });
    }
  }
}
