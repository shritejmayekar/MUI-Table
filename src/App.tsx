import { FC } from 'react';
import User from './component/User';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <User />
    </div>
  );
};
