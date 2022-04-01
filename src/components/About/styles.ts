import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30rem;
    width: 100%;
    padding: 4rem 0;

    @media (max-width: 700px) { 
        margin-top: 2rem;
        flex-direction: column;
        height: 50rem;
    }
`

export const Content = styled.div`
    display: flex;

    width: 50rem;
    height: 28rem;

    border: 2px solid ${props => props.theme.colors.about_border};
    background: ${props => props.theme.colors.about_background};

    border-radius: 0.5rem;

    @media (max-width: 700px) { 
        width: 80%;
        flex-direction: column;
        height: 100%;
    }

`
export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50%;
    height: 100%;

    border-right: 2px solid ${props => props.theme.colors.about_border};

    img{
        width: 20rem;
    }

    @media (max-width: 700px) { 
        width: 100%;
    }
`

export const Rigth = styled.div`
    width: 50%;
    height: 100%;

    @media (max-width: 700px) { 
        width: 100%;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    height: 20%;

    @media (max-width: 700px) { 
        width: 90%;
    }
`

export const Types = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 20%;
    
`
export const Stats= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50%;
    
    @media (max-width: 700px) { 
        margin-left: 1rem;
    }
`

export const ProgressBar= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    p{
        width: 3rem;
    }

    progress{
        margin: 0 1rem;
        width: 60%;
    
        -webkit-appearance: none;
    
        ::-webkit-progress-bar{
            height: 1rem;
            border-radius: 0.25rem;
            background-color: ${props => props.theme.colors.bar_background};
        }
        ::-webkit-progress-value{
            height: 1rem;
            border-radius: 0.25rem;
            background-color: ${props => 
            props.color === "hp" ? "#FF0000" : 
            props.color === "atk" ? "#F08030" :
            props.color === "def" ? "#F8D030" : 
            props.color === "spatk" ? "#6890F0" : 
            props.color === "spdef" ? "#78C850" :
            props.color === "speed" && "#F85888"};
        }
    }
`
