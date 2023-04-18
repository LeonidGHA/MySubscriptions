import { useState } from "react";
import { nanoid } from "nanoid";

import CustomBtn from "../../shared/CustomBtn/CustomBtn";

import {
  separationComma,
  separationEmpty,
} from "../../Helpers/ReworkText/reworkText";
import usersApi from "../../services/MockApi/user-api";
import UserFollowHook from "../../shared/hooks/UserFollowHook";

import { FOLLOW, FOLLOWING } from "./initialFields";

import css from "./UserItem.module.scss";

const UserItem = ({ userEl }) => {
  const { user, avatar, tweets, followers, id } = userEl;
  const [following, setFollowing] = useState(followers);
  const { toggleFollowUser, newSetFolowing } = UserFollowHook();

  const handleClick = () => {
    toggleFollowUser(id);

    if (newSetFolowing.has(id)) {
      setFollowing(following + 1);
      usersApi.putUsersFollow(id, following + 1);
    } else {
      setFollowing(following - 1);
      usersApi.putUsersFollow(id, following - 1);
    }
  };
  return (
    <li key={nanoid(5)} className={css.user_item}>
      <div className={css.user_block1}>
        <img
          lazy="true"
          src="src\shared\images\GoIt2.svg"
          alt="logo"
          className={css.user_logo}
        />
        <img lazy="true" src="src\shared\images\bgUsers.png" alt="background" />
      </div>
      <div className={css.user_imgWrapper}>
        <img
          lazy="true"
          src="src\shared\images\borderImg.png"
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
