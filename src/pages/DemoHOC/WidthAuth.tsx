import React, { Component, MouseEvent, FC, ComponentType, ComponentClass } from 'react'


type Props = { onClick(e: MouseEvent<HTMLElement>): void }


const Button: FC<Props> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
)


function widthAuthComp<T extends {}>(options: T) {
  return function widthAuthComp<P extends {}>(WrappedComp: ComponentType<P>): ComponentClass<any> {
    return class extends Component<P, any> {
      render() {
        return <WrappedComp {...this.props} {...options}/>
      }
    }
  }
}


const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
})
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
})

const initialState = { clicksCount: 0 }
type State = Readonly<typeof initialState>
const initialProps = { increment: true, decrement: true }
type CountProps = Readonly<typeof initialProps>

class ClicksCount extends Component<CountProps, State> {
  readonly state: State = initialState

  render() {
    const { clicksCount } = this.state
    const { increment, decrement } = this.props
    console.log(this.props)
    console.log(clicksCount)
    return (
      <>
        { increment && <Button {...{onClick: this.handleIncrement}}>Increment</Button> }
        { decrement && <Button {...{onClick: this.handleDecrement}}>Decrement</Button> }
        You've clicked me {clicksCount} times!
      </>
    )
  }

  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);
}


export default widthAuthComp({increment: true, decrement: false})(ClicksCount)
