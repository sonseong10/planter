import React from "react"
import { css } from "@emotion/react"
import media from "../lib/styles/constants/media"
import palette from "../lib/styles/constants/palette"

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div css={rootLayout}>{children}</div>
}

export default Layout

export type SideProps = {
  children: React.ReactNode
}

function Side({ children }: SideProps) {
  return <aside css={sidebarStyle}>{children}</aside>
}

export type MainProps = {
  children: React.ReactNode
}

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>
}

Layout.Side = Side
Layout.Main = Main

const rootLayout = css`
  max-width: 1440px;
  margin: 0 auto;
`

const sidebarStyle = css`
  width: 275px;
  height: 100%;
  position: fixed;
  display: flex;
  padding-bottom: 3rem;
  border-right: 1px solid ${palette.border};

  ${media.xlarge} {
    width: 5rem;
    padding: 0;
  }
  ${media.small} {
    display: none;
  }
`

const mainStyle = css`
  margin-left: 17.25rem;
  ${media.xlarge} {
    margin-left: 5rem;
  }
  padding-top: 3rem;
  padding-bottom: 3rem;
  ${media.small} {
    margin-left: 0;
    padding: 0;
  }
`
