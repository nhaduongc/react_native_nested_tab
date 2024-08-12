//
//  App.js
//  SwiperDemo
//
//  Created by Nha Duong<nha.duongc@gmail.com> on 12/8/24.
//

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import TopTabView from './screens/TopTabView'

export default function App() {
  return (
    <Provider store={store}>
      <TopTabView />
    </Provider>
  );
}
