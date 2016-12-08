import React from 'react';
import css from 'next/css'

export default class extends React.Component {
  render() {
    const style = css({
      'letter-spacing': 0,
      'font-size': '1.126rem',
      margin: 0,
      'line-height': '3rem',
      padding: '16px',
      cursor: 'pointer',
      display: 'inline-block',
      'font-family': 'Slack-Lato, sans-serif',
      'font-weight': 700,
      'text-decoration': 'none',
      border: '1px solid #56B68B',
      'border-radius': '4px',
      background: '#56B68B',
      color: '#fff',
    });

    return <button className={style}>Click Me</button>
  }
}