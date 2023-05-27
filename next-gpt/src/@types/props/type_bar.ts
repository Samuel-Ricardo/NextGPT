import { IProps } from "."

export interface ITypeBarProps extends IProps {
  onSubmit: () => any
  defaultMessage: string
  messageLoading: any
}
