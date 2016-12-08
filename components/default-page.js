import react from 'react';

import css from 'next/css';
import Head from 'next/head';
import Link from 'next/link';

export const head = () =>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"></meta>
    <link href="/static/lato.css" rel="stylesheet" type="text/css"></link>
  </Head>