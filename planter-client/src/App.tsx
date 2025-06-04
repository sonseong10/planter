import { Global, css } from "@emotion/react";
import Layout from "./components/layout";
import SideBar from "./components/sidebar/side-bar";
import TabletBar from "./components/sidebar/tablet-bar";
import { Routes, Route } from "react-router-dom"; // BrowserRouter 제거
import AllMessages from "./page/all-messages";
import MessageCRUD from "./service/message";

export type AppProps = {
  messageService: MessageCRUD;
};

const App = ({ messageService }: AppProps) => {
  return (
    <>
      <Layout>
        <Layout.Side>
          <TabletBar />
          <SideBar />
        </Layout.Side>
        <Routes>
          <Route
            index
            element={
              <Layout.Main>
                <AllMessages messageService={messageService} />
              </Layout.Main>
            }
          />
          {/* 필요하면 여기 다른 Route도 추가 */}
        </Routes>
      </Layout>
      <Global styles={globalStyle} />
    </>
  );
};

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
`;

export default App;
