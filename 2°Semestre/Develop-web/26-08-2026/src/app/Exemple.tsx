import { Children, memo, PropsWithChildren, ReactNode } from "react"
import { Fragment } from "react/jsx-runtime"


interface HelloWorldProps{
  children: ReactNode
}

const TitleComponent = ({children}: HelloWorldProps) => (
  <div>
    <span>{children}</span>
  </div>
)

/* 
  * My Component
  * @Example
*/

const Title = memo(TitleComponent)

export default function Page(){
  return (
    <Fragment>
    <Title>Hello, World!</Title>
      <Title>Hello, World!</Title>
    </Fragment >
  )
}