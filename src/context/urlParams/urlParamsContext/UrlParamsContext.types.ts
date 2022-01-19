export type UrlParamsContextValuesTypes<Type> = {
  urlParams: Type;
  changeUrlParams: (params: Type) => void;
};
