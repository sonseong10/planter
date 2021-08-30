import { css } from "@emotion/react"
import palette from "../../lib/styles/constants/palette"
import { BiCrown } from "react-icons/bi"

type SectionHeaderProps = {
  title: string
  icon?: string
}

const SectionHeader = ({ title, icon }: SectionHeaderProps) => {
  return (
    <header css={sectionHeader}>
      <h2>{title}</h2>
      {icon && (
        <button type="button" aria-label="Sorting messages">
          {choseHeaderIcon(icon)}
        </button>
      )}
    </header>
  )
}

const choseHeaderIcon = (iconName: string) => {
  switch (iconName) {
    case "sorte":
      return <BiCrown aria-hidden />

    default:
      throw new Error(`Unknow icon name: ${iconName}`)
  }
}

const sectionHeader = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: ${palette.white};
  border-bottom: 1px solid ${palette.border};

  h2 {
    font-size: 20px;
    line-height: 24px;
    color: ${palette.text.primary};
  }

  button[type="button"] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover {
      background-color: rgba(15, 20, 25, 0.1);
      border-radius: 50%;
    }

    svg {
      flex-grow: 0;
      flex-shrink: 0;
      font-size: 18px;
      font-weight: 700;
      color: ${palette.text.primary};
      pointer-events: none;
    }
  }
`

export default SectionHeader
