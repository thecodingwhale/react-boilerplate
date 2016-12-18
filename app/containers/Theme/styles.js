import styled, { css } from 'styled-components';

/**
 * styles
 */
function styles(props) {
  return css`
    background-color: ${props.theme.bgColor};
    color: ${props.theme.fontColor};
    height: 100vh;
  `;
}

export const Wrapper = styled.div`
  ${styles}
`;
