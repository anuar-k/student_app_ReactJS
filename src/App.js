import React from 'react'
import StudentList from "./cmponents/StudentList/StudentList";
import StudentCreator from "./cmponents/StudentCreator/StudentCreator"
import UpdateStudent from "./cmponents/UpdateStudent/UpdateStudent";
import {Route, Switch, Redirect} from "react-router";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/list"></Redirect>
                </Route>
                <Route path="/list" component={StudentList} exact/>
                <Route path="/create" component={StudentCreator}/>
                <Route path="/update" component={UpdateStudent}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;