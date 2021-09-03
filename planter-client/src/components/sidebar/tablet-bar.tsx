import { css } from "@emotion/react"
import media from "../../lib/styles/constants/media"
import Logo from "../ui/logo"

const TabletBar = () => {
  return (
    <div css={tabletBarStyle}>
      <Logo />
    </div>
  )
}

const tabletBarStyle = css`
  display: none;
  ${media.xlarge} {
    display: flex;
  }
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 12px;
  .logo {
    width: 24px;
    height: 2rem;
  }
`

export default TabletBar
