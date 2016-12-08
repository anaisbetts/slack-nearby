import React from 'react';
import css from 'next/css'

export default class extends React.Component {
  getSlackUrlForChannel(team, channel) {
    return `slack://channel?team=${team}&id=${channel}`;
  }

  getSlackUrlForDm(team, dm) {
    return `slack://user?team=${team}&id=${dm}`;
  }

  render() {
    const style = css({
      letterSpacing: 0,
      fontSize: '1.126rem',
      margin: 0,
      lineHeight: '3rem',
      padding: '16px',
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'Slack-Lato, sans-serif',
      fontWeight: 'bold',
      textDecoration: 'none',
      border: '1px solid #56B68B',
      borderRadius: '4px',
      background: '#56B68B',
      color: '#fff',
    });

    this.target = this.props.channel ?
      this.getSlackUrlForChannel(this.props.team, this.props.channel) :
      this.getSlackUrlForDm(this.props.team, this.props.dm);
    
    const navMe = () => {
      window.location.href = this.target;
    };

    return <button className={style} onClick={navMe}>{this.props.children}</button>
  }
}