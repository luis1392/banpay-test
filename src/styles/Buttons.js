import styled from "styled-components";

export const ButtonPrimary = styled.button.attrs((props) => ({
  className: "button button-primary",
  type: props.submit || props.type === "submit" ? "submit" : "button",
}))`
  &.button-primary {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "36px"};
    background-color: ${(props) => props.color || "var(--green)"};
    color: white;
    padding: ${(props) => props.padding || "0 30px"};
    border-radius: 25px;
    font-family: Lato;
    font-size: ${(props) => props.fontSize || "12px"};
    font-weight: 700;
    white-space: nowrap;
    outline: none !important;
    margin: ${(props) => props.margin || "auto"};
    border: initial;
    justify-content: center;

    :hover {
      color: white !important;
      background-color: ${(props) => props.color || "var(--green)"};
      filter: brightness(1.1);
    }

    :active {
      background-color: ${(props) => props.color || "var(--green)"};
      filter: brightness(1.2);
      border: none;
    }

    :disabled,
    :disabled:hover {
      background-color: var(--gray-light) !important;
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
