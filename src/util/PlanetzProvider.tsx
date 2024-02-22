import { useEffect, useState } from 'react';
import PlanetzContext from './PlanetContext';
import { PlanetzType } from './types/contextypes';

type PlanetzProviderProps = {
  children: React.ReactNode;
};

function PlanetzProvider({ children }: PlanetzProviderProps) {
  const [Planetzlistz, setPlanetzListz] = useState<PlanetzType[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const result = await response.json();
      const planets = result.results.map((planet: any) => {
        const { residents, ...notResidents } = planet;
        return notResidents;
      });
      setPlanetzListz(planets);
    };
    fetchApi();
  }, []);
  return (
    <PlanetzContext.Provider value={ { Planetzlistz } }>
      <div>
        {children}
      </div>
    </PlanetzContext.Provider>
  );
}

export default PlanetzProvider;
