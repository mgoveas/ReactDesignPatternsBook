const withClassName = Component => props => (
    <Component {...props} className="some-class" />
);

export default withClassName;