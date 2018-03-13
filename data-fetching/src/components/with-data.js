import React from 'react'
import getJson from './get-json'

const withData = url => Component => (
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      getJson(url)
        .then(data => this.setState({
          data,
        }))
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
)

export default withData
