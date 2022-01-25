export type Product = {
  id: string;
  name: string;
  condition: string;
  price: number;
  category: string;
  photo: string;
};

export type ProductResponse = {
  meta: {
    count: number;
  };
  data: Product[];
};

export enum ProductCategory {
  TRACTOR = 'tractor',
  SIDECAR = 'sidecar',
  HARVESTER = 'harvester',
}

export type GetProductsUrlParams = {
  page?: number;
  perPage?: number;
  category?: ProductCategory[];
};
