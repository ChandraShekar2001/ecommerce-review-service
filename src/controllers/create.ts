import { addReview } from '@review/utils/review.util';
import { IReviewDocument } from '@chandrashekar2001/ecommerce-shared';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const review = async (req: Request, res: Response): Promise<void> => {
  const review: IReviewDocument = await addReview(req.body);
  res.status(StatusCodes.CREATED).json({ message: 'Review created successfully.', review });
};
