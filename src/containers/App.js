import React from "react"
import Main from "../components/Main"
import "../assets/global.css"
import { fetchUsers } from '../actions/userActions'
import { fetchCurrentUser } from '../actions/authActions'
import { connect } from 'react-redux'
import { fetchDishes } from '../actions/dishActions'

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchCurrentUser()
        this.props.fetchDishes()
    }

    render() {
        return <Main />
    }
}

export default connect(null, {
    fetchUsers,
    fetchCurrentUser,
    fetchDishes
})(App)