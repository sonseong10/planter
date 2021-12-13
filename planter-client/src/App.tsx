import React from "react"
import { Global, css } from "@emotion/react"
import Layout from "./components/layout"
import SideBar from "./components/sidebar/side-bar"
import TabletBar from "./components/sidebar/tablet-bar"
import { Route, Switch } from "react-router-dom"
import AllMessages from "./page/all-messages"
import MessageCRUD from "./service/message"

export type AppProps = {
  messageService: MessageCRUD
}

const App = ({ messageService }: AppProps) => {
  return (
    <>
      <Layout>
        <Layout.Side>
          <TabletBar />
          <SideBar />
        </Layout.Side>
        <Switch>
          <Layout.Main>
            <Route exact path="/">
              <AllMessages messageService={messageService} />
            </Route>
          </Layout.Main>
        </Switch>
      </Layout>
      <Global styles={globalStyle} />
    </>
  )
}

const globalStyle = css`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    * {
      box-sizing: inherit;
    }
  }
`

export default App
