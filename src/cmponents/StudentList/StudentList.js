import React from 'react'
import axios from 'axios'
import classes from './StudentList.css'
import {NavLink} from 'react-router-dom'

class StudentList extends React.Component {
    state = {
        students: [],
        isLoading: true,
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:8080/topics')
            const students = [...response.data]
            this.setState({students, isLoading: false})
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="inner">
                        {
                            !this.state.isLoading ?
                                <div className={classes.StudentList}>

                                    <h1 className="h1 text-center text-white"> Students List <hr/></h1>
                                    <table className="table table-bordered text-center text-white">
                                        <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Edit</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {

                                            this.state.students.map((student, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{student.id}</th>
                                                            <td>{student.name}</td>
                                                            <td>{student.description}</td>
                                                            <td>
                                                                <NavLink
                                                                    className="btn btn-sm position-static btn-success"
                                                                    to={'/update/' + index}
                                                                > Update
                                                                    student</NavLink>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                :
                                <div className='loading__inner'>
                                    <div className="lds-spinner">
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="flex-row text-center align-content-around">
                        <NavLink className="btn btn-sm btn-primary " to="/create"> Add student</NavLink>

                    </div>
                </div>
            </div>
        )
    }
}

export default StudentList