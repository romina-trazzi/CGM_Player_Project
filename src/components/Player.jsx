import styled from 'styled-components';

export const StyledPlayer = styled.section`
  text-align: center;

  & h2 {
    color: #54a399;
  }

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
  } 

  & input {
    font: inherit;
    border: 1px solid #54a399;
    background-color: #192f2b;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0.25rem;
    color: #d1f0ec;
  }

  & button {
    cursor: pointer;
    background-color: #54a399;
    border: 1px solid #54a399;
    padding: 0.4rem 1rem;
    color: #061e1a;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    
    &:hover {
      background-color: #3c8379;
      border-color: #3c8379;
    }
  }


`



export default function Player() {
  return (
    <StyledPlayer>
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </StyledPlayer>
  );
}
