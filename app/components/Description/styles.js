import styled, { css } from 'styled-components';

/**
 * styles
 */
function styles(props) {
  return css`
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    font-size: 0.875em;
  `;
}

export const Wrapper = styled.div`
  ${styles}
`;
