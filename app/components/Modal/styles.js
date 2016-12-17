import styled, { css } from 'styled-components';

/**
 * styledWrapper
 */
function styledWrapper() {
  return css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: 1;
    opacity: 0.95;
  `;
}

export const Wrapper = styled.div`
  ${styledWrapper}
`;

