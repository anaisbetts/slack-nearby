import react from 'react';
import css from 'next/css';
import {head} from '../components/default-page';

import OpenSlackButton from '../components/open-slack-button';

const logoStyle = css({
  marginLeft: '10vw',
  marginRight: '10vw',
  position: 'absolute',
  top: '60px',
  left: '0px',
  width: '80vw'
});

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

    <img src="/static/slack.png" className={logoStyle}></img>

    <div className={buttonStyle}>
      <OpenSlackButton team='T024BE7LD' channel='C02BNG9V9'>Click to join #android-team</OpenSlackButton>
    </div>
  </div>;
}