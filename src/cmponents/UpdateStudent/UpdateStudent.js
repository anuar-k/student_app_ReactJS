import React from 'react'
import axios from 'axios'
import classes from './UpdateStudent.css'

class UpdateStudent extends React.Component {
    state = {
        students: [],
        isLoading: true
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
                <div className="container align-content-center">
                    <div className="container-md">
                        <div className="form">
                            <div className='input'></div>
                            <div className='input-group'></div>
                            <div className='input-group'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateStudent