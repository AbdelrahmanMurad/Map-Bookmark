import "../resources/css/login.css";

export let AuthPage = (props) => {
    return (
        <>
            <div className="container-fluid p-5 bg-primary text-white text-center login-cover">
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="shadow-5-strong form-box">
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
                                        aria-controls="pills-login" aria-selected="true">Login</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
                                        aria-controls="pills-register" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="loginName" className="form-control" placeholder="Email or username" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="loginPassword" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-6 d-flex justify-content-center">
                                                <div className="form-check mb-3 mb-md-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex justify-content-center">
                                                <a href="#!">Forgot password?</a>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-main btn-block mb-4">Sign in</button>
                                        <div className="text-center">
                                            <p>Not a member? <a href="#!">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="registerUsername" className="form-control" placeholder="Username" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="registerEmail" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="registerPassword" className="form-control" placeholder="password" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="registerRepeatPassword" className="form-control"
                                                placeholder="repeat password" />
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" defaultChecked
                                                aria-describedby="registerCheckHelpText" />
                                            <label className="form-check-label" htmlFor="registerCheck">
                                                I have read and agree to the terms
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-main btn-block mb-3">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
            <div className="foo">
                <footer className="text-center text-white bg-green">
                    <div className="text-center p-3">
                        ©2023Copyright:HeroTeam.com
                    </div>
                </footer>
            </div>
        </>
    );
}