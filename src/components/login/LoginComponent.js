import * as React from 'react';
import './style.scss';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card card-login">
                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input type="text" name="email" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key"></i></span>
                                        </div>
                                        <input type="password" name="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="form-group">
                                        <input type="submit" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;