import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';
import store from './core/store';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ConfigProvider direction="rtl" locale={enUS}>
        <App />
      </ConfigProvider>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
