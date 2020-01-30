import styled from 'styled-components';

export const AppContainer = styled.main({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
});

export const H1 = styled.h1({
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '2rem',
    textTransform: 'uppercase',
});

export const Jumbotron = styled.section({
    padding: '2rem 2.5rem',
    borderRadius: '.25rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,.2)',
});

interface IFormControlProps {
    invalid?: boolean;
}

export const FormControl = styled.input<IFormControlProps>`
    all: unset;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid;
    border-color: ${({ invalid }) => !!invalid ? '#dc3545' : '#ced4da'};
    border-radius: .25rem;
    padding: .5rem;
    margin-bottom: 1rem;
`;

export const Button = styled.button({
    all: 'unset',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.5rem 1rem',
    color: '#fff',
    outline: 'none',
    fontSize: '1.2rem',
    backgroundColor: '#007bff',
    borderRadius: '.25rem',
    transition: 'all 250ms ease',
    ':hover': {
        backgroundColor: '#0069D9',
    },
    ':active': {
        outline: 'none',
    },
    ':focus': {
        outline: 'none',
    }
});