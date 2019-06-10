import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

export default class NextApp extends App {
  render() {
    const {Component} = this.props
    return (
      <Container>
        <Head>
          <title>一刻</title>
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            name="viewport"
          />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
        </Head>
        <Component />
      </Container>
    )
  }
}
