import React from 'react';
import {userEvent} from '@testing-library/user-event';
import { render, screen , waitFor } from '@testing-library/react';
import App from '../App';
import PlanetzProvider from '../util/PlanetzProvider';
import PlanetTable from '../components/PlanetTable';

const searchPlanet = 'Star Wars Planets Searching';
const valueFilter = 'value-filter';
const columnFilter = 'column-filter';
const filter = 'Filtrar Numéricamente';
const comparisonFilter = 'comparison-filter';

describe('Teste de renderização da tabela', () => {
  it('Deve renderizar a tabela com os elementos corretos', () => {

    render(<PlanetzProvider><PlanetTable /></PlanetzProvider>);

   
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Ordenar')).toBeInTheDocument();
    expect(screen.getByText('Operator')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Filtrar Numéricamente' })).toBeInTheDocument();
  });
});

describe('Teste de renderização do app', () => {
  it('Deve renderizar o app com os elementos corretos', () => {
    render(<App />);
    expect(screen.getByText(searchPlanet)).toBeInTheDocument();
    expect(screen.getByTestId(valueFilter)).toBeInTheDocument();
    expect(screen.getByTestId(columnFilter)).toBeInTheDocument();
    expect(screen.getByTestId(filter)).toBeInTheDocument();
    expect(screen.getByTestId(comparisonFilter)).toBeInTheDocument();
  });
});
// describe('Teste da aplicação toda',  () => {
//     render(<App />);
//     test('Teste do titulo', () => {
//         const title = screen.getByText(/Star Wars Planets Searching/i);
//         expect(title).toBeInTheDocument();
//     });
//     test ('Teste do table header', () => {
//         const tableHeader = screen.getByTestId('table-header');
//         expect(tableHeader).toBeInTheDocument();
//     });
//     test ('teste do table',()=>{
//         const table = screen.getByTestId('table');
//         expect(table).toBeInTheDocument();
    
//     })
//     test('Teste do input', () => {
//         const input = screen.getByTestId('input-filter');
//         expect(input).toBeInTheDocument();
//     });
//     test('Teste do select', () => {
//         const select = screen.getByTestId('column-filter');
//         expect(select).toBeInTheDocument();
//     });
//     test('Teste do botão', () => {
//         const button = screen.getByTestId('button-filter');
//         expect(button).toBeInTheDocument();
//     });
// });