import styled from 'styled-components'

export const Container = styled.div`
    width: 18rem;
    height: 20rem;
    background: ${props => props.theme.colors.about_background};
    border: 1px solid ${props => props.theme.colors.about_border};
    border-radius: 0.25rem;

    @media (max-width: 700px) { 
        margin-top: 1rem;
        width: 24rem;
        height: 30rem;
    }
    
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;

    padding: 0.5rem;
`

export const PokemonImage= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: 10rem;
    }
`

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
`

export const Info= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
`

export const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 2rem;
    margin: 0 0.25rem;

    background: green;
    border-radius: 0.25rem;
`

