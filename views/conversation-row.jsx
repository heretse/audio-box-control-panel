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
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Classification <span className="caret"></span></button>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href={"/conversations/classify?type=Intents&_id=" + this.props.docId}>Intents</a></li>
                            <li><a href={"/conversations/classify?type=Entities&_id=" + this.props.docId}>Entities</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        );
    }
}

module.exports = ConversationRowObject;