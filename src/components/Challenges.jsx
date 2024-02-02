import styled from 'styled-components'

export const StyledChallenges = styled.div`
    max-width: 50rem;
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    &.challenge {
        width: 22rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        margin: 2rem auto;
        background: linear-gradient(#4df8df, #4df0f8);
        color: #221c18;
        box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
        border-radius: 6px;
        
        &.active {
            animation: flash 1s infinite;

            @keyframes slide-in-from-top {
                0% {
                    transform: translateY(-15%);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

                @keyframes flash {
                0% {
                    opacity: 0.5;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0.5;
                }
            }
        }
       
        
        & button {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            background: #12352f;
            color: #edfcfa;
            font-size: 1.2rem;
            cursor: pointer;

            &:hover {
                background: #051715;
            }
        }

        & h2 {
            font-size: 1.5rem;
            letter-spacing: 0.1em;
            margin: 0;
            text-align: center;
            text-transform: uppercase;
            color: #221c18;
        }

    }
    
`

function Challenges() {
  return (
    <StyledChallenges></StyledChallenges>
  )
}

export default Challenges