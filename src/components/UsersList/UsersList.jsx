import { nanoid } from "nanoid";

import UserItem from "../UserItem/UserItem";

import css from "./UsersList.module.scss";

const UsersList = ({ users }) => {
  return (
    <ul className={css.users_list}>
      {users.map((el) => {
        return <UserItem key={nanoid(6)} userEl={el} />;
      })}
    </ul>
  );
};

export default UsersList;
