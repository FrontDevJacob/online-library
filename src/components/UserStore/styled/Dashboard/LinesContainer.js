import styled, { css } from 'styled-components/macro'

export default styled.div`
    display: none;
    cursor: pointer;
    position: relative;
    transition: 0.5s ease-in-out;
    @media (max-width: 800px) {
        display: block;
    }
    ${({ shouldMenuExpand }) =>
        shouldMenuExpand &&
        css`
            transform: rotate(45deg);
        `}
`
