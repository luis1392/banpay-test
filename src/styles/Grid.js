import styled, { css } from "styled-components";
// This styles components are based in bootstrap lib, for general purpose.
// You can add more components that comes from the classes of bootstrap, if you need it.

export const Container = styled.div.attrs({
  className: "container",
})``;

export const Row = styled.div.attrs({
  className: "row",
})``;

export const Col = styled.div.attrs(({ styleName, col, sm, md, lg, xl }) => ({
  className: `${styleName ? styleName : ""} ${col ? `col-${col}` : ""} ${
    sm ? `col-sm-${sm}` : ""
  } ${md ? `col-md-${md}` : ""} ${lg ? `col-lg-${lg}` : ""} ${
    xl ? `col-xl-${xl}` : ""
  }`,
}))`
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  ${(props) =>
    props.mobile &&
    css`
      @media (max-width: 576px) {
        padding: 0 !important;
      }
    `}
`;
