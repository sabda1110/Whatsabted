'use client';
import { Provider } from 'react-redux';
import store from '@/app/model/store';

const UseRedux = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default UseRedux;
