import { paginateResponse as paginateResponseType } from '../types';
export const paginateResponse = ({
  data,
  page,
  limit,
}: paginateResponseType) => {
  const [total, results] = data;
  return {
    page,
    results,
    total_pages: Math.ceil(total / limit),
    total_results: total,
  };
};
