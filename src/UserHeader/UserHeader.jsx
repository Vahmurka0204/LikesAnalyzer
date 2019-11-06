import React, { Component } from 'react';
import VKService from '../vkService.js';
import './UserHeader.css';

class UserHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPhoto: ''
        }
    }

    componentDidMount() {
        const { id } = this.props;
        const vkService = new VKService();
        vkService.GetUserData(id, this.setUserData);
    }

    render() {
        const { userName, userPhoto } = this.state;
        if (userName.length === 0 && userPhoto.length === 0) {
            return null
        }
        return (<div className="header">
            <img src={userPhoto} className="header__user-image" alt="current user icon" />
            <h3>{userName}</h3>
        </div>)
    }

    setUserData = (response) => {
        if (response) {
            this.setState({
                userName: response.first_name + " " + response.last_name,
                userPhoto: response.photo_100
            })
        }
    }
}

export default UserHeader;