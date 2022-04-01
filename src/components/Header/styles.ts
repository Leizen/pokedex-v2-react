import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 100%;

    background: ${props => props.theme.colors.header};
    border-bottom: 2px solid ${props => props.theme.colors.about_border};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    @media (max-width: 700px) { 
        width: 90%;
    }
`

export const Logo = styled.div`
    img{
        width: 14rem;
    }

`

export const MadeBy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 1.5rem;
    }

    span{
        margin: 0 0.5rem;
    }
`