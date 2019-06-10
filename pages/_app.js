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

  state = {
    // 0为第一页，1为详情页
    pageState: 0,
    touchStartY: 0,
  }

  switchToDetail = () => {}

  switchToIndex = () => {}

  switchState = len => {
    if (Math.abs(len) < 30) return
    else if (len >= 30) {
      if (this.state.pageState === 0) return
      this.setState(
        {
          pageState: 0,
        },
        () => {
          this.switchToIndex()
        }
      )
    } else {
      if (this.state.pageState === 1) return
      this.setState(
        {
          pageState: 1,
        },
        () => {
          this.switchToDetail()
        }
      )
    }
  }

  touchStart = e => {
    this.setState({
      touchStartY: e.touches[0].clientY,
    })
  }
  touchEnd = e => {
    const touchEndY = e.changedTouches[0].clientY
    const len = touchEndY - this.state.touchStartY
    this.switchState(len)
  }

  render() {
    const {Component, pageProps} = this.props

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
        <Component
          {...pageProps}
          touchStart={this.touchStart}
          touchEnd={this.touchEnd}
          pageState={this.state.pageState}
        />
      </Container>
    )
  }
}
