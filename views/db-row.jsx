var React = require('react');

class DatabaseRowObject extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
            </tr>
        );
    }
}

module.exports = DatabaseRowObject;