import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';

import { generateBlockAction } from './store/actions';
import configureStore from './store/configureStore';
import theme from "./styledComponents/theme";
import GlobalStyles from "./styledComponents/GlobalStyles";
import MainField from "./components/MainField/MainField";

const store = configureStore();

const app = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <MainField />
      </div>
    </ThemeProvider>
  </Provider>

);

render(app, document.getElementById("app"));

store.dispatch(generateBlockAction());
