import { useEffect, useState } from 'react';
import PlanetzContext from './PlanetContext';
import { PlanetzType } from './types/contextypes';
import { QuantityFilterType } from './types/Quantityfilter';

type PlanetzProviderProps = {
  children: React.ReactNode;
};

function PlanetzProvider({ children }: PlanetzProviderProps) {
  const [Planetzlistz, setPlanetzListz] = useState<PlanetzType[]>([]);
  const [Planetzstate, setPlanetzState] = useState<PlanetzType[]>([]);
  const [QuantityFilter, setQuantityFilter] = useState([] as QuantityFilterType[]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const result = await response.json();
      const planetz = result.results.map((planet: any) => {
        const { residents, ...notResidents } = planet;
        return notResidents;
      });
      setPlanetzListz(planetz);
      setPlanetzState(planetz);
      console.log(planetz);
    };
    fetchApi();
  }, []);
  const AllValues = (original:PlanetzType[], filtros:QuantityFilterType[]) => {
    let arr = original;
    filtros.forEach((filter) => {
      arr = arr.filter((planet) => {
        const { column, comparison, value } = filter;
        console.log(comparison, value);
        switch (comparison) {
          case 'maior que':
            return Number(planet[column as keyof PlanetzType]) > Number(value);
          case 'menor que':
            return Number(planet[column as keyof PlanetzType]) < Number(value);
          case 'igual a':
            return Number(planet[column as keyof PlanetzType]) === Number(value);
          default:
            return false;
        }
      });
    });
    return arr;
  };

  const ComparasionFilter = () => {
    const Numberfilter = AllValues(Planetzstate, QuantityFilter);
    setPlanetzListz(Numberfilter);
  };
  useEffect(() => {
    ComparasionFilter();
  }, [QuantityFilter]);
  return (
    <PlanetzContext.Provider
      value={ { Planetzlistz, QuantityFilter, setQuantityFilter } }
    >
      <div>
        {children}
      </div>
    </PlanetzContext.Provider>
  );
}

export default PlanetzProvider;
