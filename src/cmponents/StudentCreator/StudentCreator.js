import React from 'react'
import axios from 'axios'

// import classes from './StudentCreator.css'

class StudentCreator extends React.Component {

    state = {
        student: {
            id: 4,
            name: "A",
            description: "aaaa"
        },
        isLoading: true
    }

    createStudentHandler = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:8080/topics', this.state.student);

        } catch (e) {
            console.log(e)
        }
    }

    changeHandler = (value) => {
        // const student  = {
        //     id :
        // }
        // this.setState({student})
    }


    render() {
        return (
            <div className="body">
                <div className="container align-content-center text-center">
                    <div className="container-md">
                        <form onSubmit={this.submitHandler}>
                            <label htmlFor="name"> Name</label>
                            {/*<input id='name' type="text"*/}
                            {/*       onChange={event => this.changeHandler(event.target.value)}/>*/}

                            <button onClick={this.createStudentHandler}>Click</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentCreator