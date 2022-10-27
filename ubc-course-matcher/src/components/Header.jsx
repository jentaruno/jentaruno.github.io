import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid bg-light px-3 py-2 mb-4 border-bottom">
                <h3>🙌 UBC Course Matcher</h3>
            </div>
        );
    }
}

export default Header;