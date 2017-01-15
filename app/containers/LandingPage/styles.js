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

export const TopRightIcon = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;

  :hover {
    cursor: pointer;
  }
`;

function styledButton(props) {
  const borderColor = props.theme.fontColor;
  const fontColor = props.theme.fontColor;

  return css`
    padding: 8px 12px;
    border: 1px solid ${borderColor};
    background-color: transparent;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 13px;
    color: ${fontColor};
  `;
}

export const Button = styled.button`
  ${styledButton}
`;