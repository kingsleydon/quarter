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
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            name="viewport"
          />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "var cnzz_s_tag = document.createElement('script');cnzz_s_tag.type = 'text/javascript';cnzz_s_tag.async = true;cnzz_s_tag.charset = 'utf-8';cnzz_s_tag.src = 'https://w.cnzz.com/c.php?id=1277704529&async=1';var root_s = document.getElementsByTagName('script')[0];root_s.parentNode.insertBefore(cnzz_s_tag, root_s);",
            }}
          />
          <style
            dangerouslySetInnerHTML={{__html: 'body > a {display: none}'}}
          />
        </Head>
        <Component />
      </Container>
    )
  }
}
