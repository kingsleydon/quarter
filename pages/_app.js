import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

export default class NextApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component} = this.props
    return (
      <Container>
        <Head>
          <title>数媒网络毕业展邀请函</title>
          <style>{'body > a {display: none}'}</style>
        </Head>
        <Component />
      </Container>
    )
  }
}
