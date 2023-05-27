import { IProps } from "."

export interface IChatItemProps extends IProps {
  content: string
  is_from_bot: boolean
  loading?: boolean
}
