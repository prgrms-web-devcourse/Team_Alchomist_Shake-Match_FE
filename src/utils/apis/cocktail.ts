import useAxios from '@hooks/useAxios';
import type { ICocktail, ITHEME } from '@models/types';
import { AXIOS_REQUEST_TYPE } from '@constants/axios';

const searchCocktailByName = (keyword: string): Promise<ICocktail[]> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  return request.get(`/cocktail/${keyword}`);
};

const getCocktailListByTheme = (
  mainCategory: ITHEME,
  subCategory: string
): Promise<ICocktail[]> => {
  const request = useAxios(AXIOS_REQUEST_TYPE.DEFAULT);
  return request.get(
    `/cocktail/theme?mainCategory=${mainCategory}&subCategory=${subCategory}`
  );
};

export { searchCocktailByName, getCocktailListByTheme };
