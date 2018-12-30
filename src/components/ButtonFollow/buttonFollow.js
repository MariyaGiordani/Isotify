import React, { Component } from 'react';
import './buttonFollow.css';
import followImg from '../../assets/img/follow-plus.png';
import followingImg from '../../assets/img/follow-check.png';
import {
  getIsFollowingArtist,
  followArtist,
  unfollowArtist
} from '../../services/artists';

class ButtonFollow extends Component {
  state = {
    isFollowing: false,
    id: ''
  };

  componentDidMount = () => {
    this.fetchFollowingInfo();
  };

  componentDidUpdate = () => {
    this.fetchFollowingInfo();
  };

  fetchFollowingInfo = () => {
    const { id } = this.props;
    getIsFollowingArtist(id).then((isFollowing) => {
      this.setState({ isFollowing, id });
    });
  };

  buttonUnfollowArtist = () => {
    const { id } = this.state;
    unfollowArtist(id).then(() => {
      this.setState({ isFollowing: false });
    });
  };

  buttonFollowArtist = () => {
    const { id } = this.state;
    followArtist(id).then(() => {
      this.setState({ isFollowing: true });
    });
  };

  render = () => {
    const { isFollowing, id } = this.state;
    const imageSrc = isFollowing ? followingImg : followImg;
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonAction = isFollowing
      ? () => this.buttonUnfollowArtist()
      : () => this.buttonFollowArtist();
    return (
      <button className="button-follow" onClick={buttonAction}>
        <img
          className="button-follow__icon"
          alt="symbol representing follow artist"
          src={imageSrc}
        />
        {text}
      </button>
    );
  };
}

export default ButtonFollow;
