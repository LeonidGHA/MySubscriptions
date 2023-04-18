import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import GoItImg from "../../shared/images/GoIt.svg";
import BgImg from "../../shared/images/bgUsers.png";
import BorderImg from "../../shared/images/borderImg.png";

import CustomBtn from "../../shared/CustomBtn/CustomBtn";

import {
  separationComma,
  separationEmpty,
} from "../../Helpers/ReworkText/reworkText";
import usersApi from "../../services/MockApi/user-api";

import { FOLLOW, FOLLOWING } from "./initialFields";

import css from "./UserItem.module.scss";

const UserItem = ({ userEl, toggleFollowUser, newSetFolowing }) => {
  const { user, avatar, tweets, followers, id } = userEl;
  const [following, setFollowing] = useState(followers);

  const handleClick = async () => {
    toggleFollowUser(id);

    if (newSetFolowing.has(id)) {
      const data = await usersApi.putUsersFollow(id, following + 1);
      setFollowing(data.followers);
    } else {
      const data = await usersApi.putUsersFollow(id, following - 1);
      setFollowing(data.followers);
    }
  };
  return (
    <li key={nanoid(5)} className={css.user_item}>
      <div className={css.user_block1}>
        <img lazy="true" src={GoItImg} alt="logo" className={css.user_logo} />
        <img lazy="true" src={BgImg} alt="background" />
      </div>
      <div className={css.user_imgWrapper}>
        <img
          lazy="true"
          src={BorderImg}
          alt="border"
          className={css.user_borderImg}
        />
        <img
          lazy="true"
          src={avatar}
          alt={`avatar ${user}`}
          className={css.user_img}
        />
      </div>

      <div className={css.user_block2}>
        <p className={`${css.user_text} ${css.tweets}`}>
          {separationEmpty(tweets)} TWEETS
        </p>
        <p className={`${css.user_text} ${css.followers}`}>
          {separationComma(following)} FOLLOWERS
        </p>
        <CustomBtn
          onClick={handleClick}
          text={
            newSetFolowing.has(id)
              ? FOLLOWING.toUpperCase()
              : FOLLOW.toUpperCase()
          }
          className={
            newSetFolowing.has(id)
              ? `${css.user_btn} ${css.active}`
              : css.user_btn
          }
        />
      </div>
    </li>
  );
};

export default UserItem;
