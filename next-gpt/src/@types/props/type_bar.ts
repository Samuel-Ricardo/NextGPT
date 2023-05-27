import { FormEvent } from "react"
import { IProps } from "."

export interface ITypeBarProps extends IProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => any
  defaultMessage?: string
  messageLoading: any
}
