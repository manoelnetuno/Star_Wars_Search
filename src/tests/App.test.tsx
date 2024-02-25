import React from 'react';
import {userEvent} from '@testing-library/user-event';
import { render, screen , waitFor } from '@testing-library/react';
import App from '../App';

describe('Teste da aplicação toda',  () => {
    render(<App />);
    test('Teste do titulo', () => {
        const title = screen.getByText(/Star Wars Planets Searching/i);
        expect(title).toBeInTheDocument();
    });
    test ('Teste do table header', () => {
        const tableHeader = screen.getByTestId('table-header');
        expect(tableHeader).toBeInTheDocument();
    });
    test ('teste do table',()=>{
        const table = screen.getByTestId('table');
        expect(table).toBeInTheDocument();
    
    })
    test('Teste do input', () => {
        const input = screen.getByTestId('input-filter');
        expect(input).toBeInTheDocument();
    });
    test('Teste do select', () => {
        const select = screen.getByTestId('column-filter');
        expect(select).toBeInTheDocument();
    });
    test('Teste do botão', () => {
        const button = screen.getByTestId('button-filter');
        expect(button).toBeInTheDocument();
    });
});