// import { useContext, useState } from 'react';
// import PlanetzContext from '../util/PlanetContext';
// import { OrderType } from '../util/types/ordertypes';

// export default function SortFilter() {
//   return (
//     <div>
//       <label htmlFor="column">Ordenar</label>
//       <select
//         id="column"
//         name="column"
//       >
//         <option value="population">population</option>
//         <option value="orbital_period">orbital_period</option>
//         <option value="diameter">diameter</option>
//         <option value="rotation_period">rotation_period</option>
//         <option value="surface_water">surface_water</option>
//       </select>

//       <input
//         type="radio"
//         id="asc"
//         name="sort"
//         value="ASC"
//       />
//       <label htmlFor="asc">Ascendente</label>
//       <input
//         type="radio"
//         id="desc"
//         name="sort"
//         value="DESC"
//       />
//       <label htmlFor="desc">Descendente</label>

//       <button
//         data-testid="column-sort-button"
//         onClick={ (e) => {
//           e.preventDefault();
//         } }
//       >
//         Ordenar
//       </button>
//     </div>
//   );
// }
