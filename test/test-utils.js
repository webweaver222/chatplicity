import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/store";

function render(ui, options) {
  return rtlRender(ui, {
    wrapper: Wrapper,
    ...options
  });
}

function Wrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export * from "@testing-library/react";

export { render };
