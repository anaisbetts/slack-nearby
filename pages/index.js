import React from 'react';
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

const helpStyle = css({
  letterSpacing: 0,
  fontSize: '1.126rem',
  margin: 0,
  padding: '16px',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Slack-Lato, sans-serif',
  fontWeight: 'normal',
});

export default class TheApp extends React.Component {
  static async getInitialProps({query}) {
    return { query };
  }

  render() {
    const theHead = head();

    let args = {
      team: this.props.query.team,
    }

    if (this.props.query.channel) {
      args.channel = this.props.query.channel;
    } else {
      args.dm = this.props.query.dm;
    }

    const buttonText = this.props.query.text || this.props.query.dm ?
      `Click to DM @${this.props.query.name}` :
      `Click to join #${this.props.query.name}`;

    const content = this.props.query.team ?
      <OpenSlackButton {...args}>{buttonText}</OpenSlackButton> :
      <div className={helpStyle}>
        Hi! This is a website that helps you create Physical Web beacon landing pages. Talk to @paulcbetts for more info.
      </div>

    return <div className={containerStyle}>
      {theHead}

      <img src="/static/slack.png" className={logoStyle}></img>

      <div className={buttonStyle}>
        {content}
      </div>
    </div>;
  }
}