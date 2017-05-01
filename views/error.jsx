var React = require('react');
var DefaultLayout = require('./layouts/default');

class ErrorMessage extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <h1>{this.props.message}</h1>
                <h2>{this.props.status}</h2>
                <pre>{this.props.stack}</pre>
            </DefaultLayout>
        );
    }
}

module.exports = ErrorMessage;