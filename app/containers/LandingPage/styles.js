import styled, { css } from 'styled-components';

/**
 * stylesWrapper
 */
function stylesWrapper() {
  return css`
    text-align: center;
    padding-top: 90px;
    display: flex;
    flex-direction: column;
  `;
}

export const Wrapper = styled.div`
  ${stylesWrapper}
`;

function styledFooter() {
  return css`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
  `;
}

export const Footer = styled.div`
  ${styledFooter}
`;
