import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30rem;
    width: 100%;

    background: ${props => props.theme.colors.about_background};
`

export const Content = styled.div`
    display: flex;

    width: 50rem;
    height: 28rem;

    border: 2px solid ${props => props.theme.colors.border};
    border-radius: 0.5rem;
`
export const Left = styled.div`
    width: 50%;
    height: 100%;

    background: black;
`

export const Rigth = styled.div`
    width: 50%;
    height: 100%;

    padding: 1rem 1rem;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 2rem;
`

export const Types = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 6rem;
`

export const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 2rem;
    margin: 0 1rem;

    background: green;
    border-radius: 0.25rem;
`
export const Stats= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 18rem;
`

export const ProgressBar= styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;

    margin-top: 1rem;
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
            background-color: #eee;
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
