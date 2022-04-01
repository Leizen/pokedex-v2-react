import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    margin-bottom: 10rem;
    
`

export const Content = styled.div`
    width: 80%;
`
export const Header = styled.div`
    display: flex;

    select {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 8rem;
        margin-left: 2rem;
        border: 1px solid ${props => props.theme.colors.about_border};;
        border-radius: 0.25rem;
        background: ${props => props.theme.colors.about_background};
        padding: 0 0.25rem;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;

    width: 25rem;
    height: 2rem;

    border: 1px solid ${props => props.theme.colors.about_border};
    border-radius: 0.25rem;
    background: ${props => props.theme.colors.about_background};

    img{
        width: 20px;
        padding: 0 1rem;
        filter: ${props => props.theme.name === "dark" ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" : ''}
    }

    input{
        width: 80%;
        height: 100%;
        border: none;
        margin-left: 0.25rem;
        background: ${props => props.theme.colors.about_background};

        ::placeholder{
            color: ${props => props.theme.colors.text};
        }
            
        :focus{
            outline: none;
        }
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 1rem;
    justify-items: center;

    height: 100%;
    width: 100%;
    margin-top: 2rem;
    
    @media (max-width: 700px) { 
        justify-items: center;
        grid-template-columns: repeat(1,1fr);
    }
`

