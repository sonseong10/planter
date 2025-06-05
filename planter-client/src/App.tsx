import Layout from "./components/layout";
import SideBar from "./components/sidebar/side-bar";
import TabletBar from "./components/sidebar/tablet-bar";
import { Routes, Route } from "react-router-dom";
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
    </>
  );
};

export default App;
