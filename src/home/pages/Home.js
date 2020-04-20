import React from 'react'
import AuthStepper from '../../auth/AuthStepper'
import RegisterStepper from '../../auth/RegisterStepper'
import { Card, CardContent } from '@material-ui/core'

export default function Home() {
    return (
        <div>
            <Card>
                <CardContent>
                    <ul className="nav nav-pills nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#menu1">Register New User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#menu2">Authenticate</a>
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <br />
            <Card>
                <CardContent>
                    <div className="tab-content">
                        <div id="menu1" className="container tab-pane active"><br />
                            <RegisterStepper />
                        </div>
                        <div id="menu2" className="container tab-pane fade"><br />
                            <AuthStepper />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
