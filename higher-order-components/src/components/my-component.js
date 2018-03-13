import React from 'react'
import withClassName from './withClassName'

const MyComponent = ({ myClassName }) => (
  <div className={myClassName} />
)

MyComponent.propTypes = {
  myClassName: React.PropTypes.string,
}

export default withClassName(MyComponent)
