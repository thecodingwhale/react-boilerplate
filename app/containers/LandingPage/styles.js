import styled, { css } from 'styled-components';

/**
 * stylesWrapper
 */
function stylesWrapper() {
  return css`
    text-align: center;
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

export const Section = styled.div`
  padding-top: 90px;
`;

export const SocialIconsWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  span.fa {
    margin-right: 15px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
