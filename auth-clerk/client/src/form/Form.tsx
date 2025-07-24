import React, { type ReactNode } from "react"

type FormProps = {
  children?: ReactNode
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...rest }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()

    onSubmit?.(event)
  }

  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  )
}

export default Form
