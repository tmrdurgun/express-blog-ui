import * as React from 'react';

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-9"></div>
                </div>
            </div>
        )
    }
}

export default DashboardComponent;