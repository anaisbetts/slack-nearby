import react from 'react';
import css from 'next/css';
import {head} from '../components/default-page';

import OpenSlackButton from '../components/open-slack-button';

const containerStyle = css({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
});

const buttonStyle = css({
  order: 0,
  flex: '0 1 auto',
});

export default () =>  {
  const theHead = head();
  return <div className={containerStyle}>
    {theHead}

    <div className={buttonStyle}>
      <OpenSlackButton></OpenSlackButton>
    </div>
  </div>;
}