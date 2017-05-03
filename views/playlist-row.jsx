var React = require('react');

class PlaylistRowObject extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.userId}</td>
                <td>{this.props.type}</td>
                <td><a href={"http://open.spotify.com/user/" + this.props.ownerId} target="_blank">{this.props.ownerId}</a></td>
                <td><a href={this.props.externalUrl} target="_blank">{this.props.itemId}</a></td>
            </tr>
        );
    }
}

module.exports = PlaylistRowObject;