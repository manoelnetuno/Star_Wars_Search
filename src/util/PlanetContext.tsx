import { createContext } from 'react';
import { PlanetzType } from './types/contextypes';
import { QuantityFilterType } from './types/Quantityfilter';

export type SWplanetzType = {
  Planetzlistz: PlanetzType[];
  QuantityFilter: QuantityFilterType;
  setQuantityFilter: any
  ComparasionFilter: (filter: QuantityFilterType) => void;
};
const PlanetzContext = createContext({} as SWplanetzType);
export default PlanetzContext;
