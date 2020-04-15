import React from 'react'
import logo from '../logo.svg'
import '../styles.css'
import { getAllUsers, setCurrentUserSuccess } from '../actions/user'
import { connect } from 'react-redux'

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const { getAllUsers } = this.props
        getAllUsers()
    }

    handleSubmit = event => {
        event.preventDefault()
        const { user, setCurrentUserSuccess } = this.props
        let userValue = { ...this.state }
        let found = user.all_users.find(u => u.username == userValue.username)

        if (found !== null) {
            if (userValue.password == found.password)
                setCurrentUserSuccess(found)
        }
    }

    handleChange = event => {
        event.preventDefault();
        if (event.target.name === "username") {
            this.setState({ username: event.target.value })
        } else {
            this.setState({ password: event.target.value })
        }
    }


    render() {
        const { history } = this.props
        return (
            < div className="container" >
                <img src={logo} className="app-logo" alt="logo" />
                <p className="title">ItemStore</p>
                <form className="formContainer" onChange={this.handleChange} onSubmit={this.handleSubmit} >
                    <label className="subTitle">
                        Username
                            </label>
                    <input className="input" type="text" name="username" />
                    <label className="subTitle">
                        Password
                            </label>
                    <input className="input" type="text" name="password" />
                    <input className="loginBtn" type="submit" value="Log In" />
                </form>
                <form>
                    <input className="loginBtn"
                        onClick={() => history().push("/register")}
                        type="submit" value="Register" />
                </form>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})


const mapDispatchToProps = {
    getAllUsers,
    setCurrentUserSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)