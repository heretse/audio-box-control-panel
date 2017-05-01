var React = require('react');

class UserRowObject extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.userId}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.fullName}</td>
            </tr>
        );
    }
}

module.exports = UserRowObject;