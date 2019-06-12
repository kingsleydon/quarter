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
          <title>数媒网络毕业展邀请函</title>
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            name="viewport"
          />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <script
            type="text/javascript"
            src="https://s23.cnzz.com/z_stat.php?id=1277704529&web_id=1277704529"
          />
          <style>{'body > a {display: none}'}</style>
        </Head>
        <Component />
      </Container>
    )
  }
}
