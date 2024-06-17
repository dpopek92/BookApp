import { Pagination } from "./pagination.interface";

export interface PaginatedResponse<T> extends Pagination {
  data: T[];
  total: number;
}
