var React = require('react');

class Header extends React.Component {
    render() {

        const head3Style = {
            marginTop: '10px'
        };

        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                            data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                            aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h3 style={head3Style}>AudioBox<small>後台管理</small>&nbsp;</h3>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="/">Database</a></li>
                            <li><a href="/users">Telegram Users</a></li>
                            <li><a href="/conversations">Conversation</a></li>
                            <li><a href="/playlists">Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Header;