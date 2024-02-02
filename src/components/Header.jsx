import styled from 'styled-components'

export const StyledHeader = styled.header`

    & h1 {
        font-size: 2.5rem;
        margin: 0;
        text-align: center;
        color: #c6f4f2;

        & em {
            font-style: normal;
            color: #46cebe;
        }
    }

    & p {
        font-size: 1.2rem;
        margin: 0;
        text-align: center;
        color: #c6f4f2;
    }

`

function Header() {
  return (
    <StyledHeader>
        <h1>The <em>Almost</em> Final Countdown</h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
    </StyledHeader>
   
  )
}

export default Header