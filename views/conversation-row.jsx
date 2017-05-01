var React = require('react');
var DateTime = require('date-time-string');

class ConversationRowObject extends React.Component {
    render() {
        var timeString = "";
        if (this.props.timestamp) {
            timeString = DateTime.toDateTimeString(new Date(this.props.timestamp));
        }

        return (
            <tr>
                <td>{this.props.userName}</td>
                <td>{this.props.input}</td>
                <td>{this.props.intents}</td>
                <td>{this.props.entities}</td>
                <td>{this.props.nodeVisited}</td>
                <td>{timeString}</td>
            </tr>
        );
    }
}

module.exports = ConversationRowObject;