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
    display: none;
  `;
}

export const Wrapper = styled.div`
  ${styledWrapper}
`;

export const TopRightIcon = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;

  :hover {
    cursor: pointer;
  }
`;