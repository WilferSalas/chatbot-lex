// @packages
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @scripts
import Chat from '../src/components/Chat';

test('<Chat /> Render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chat />, div);
});