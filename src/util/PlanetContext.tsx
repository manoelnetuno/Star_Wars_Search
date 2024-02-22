import { createContext } from 'react';
import { PlanetzType } from './types/contextypes';

export type SWplanetzType = {
  Planetzlistz: PlanetzType[];
};
const PlanetzContext = createContext({} as SWplanetzType);
export default PlanetzContext;
