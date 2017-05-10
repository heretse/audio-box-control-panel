var React = require('react');

class UserRowObject extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.userId}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.fullName}</td>
                <td>
                    <form method="POST" action="/users/edit">
                        <div className="input-group">
                            <input type="hidden" name="docId" value={this.props.docId} />
                            <input type="text" className="form-control" name="newSenseId" value={this.props.senseId} />
                            <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-edit"></i>
                            </button>
                            </div>
                        </div>
                    </form>
                </td>
            </tr>
        );
    }
}

module.exports = UserRowObject;