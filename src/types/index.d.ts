import express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}

export interface paginateResponse {
  data: any[];
  page: number;
  limit: number;
}