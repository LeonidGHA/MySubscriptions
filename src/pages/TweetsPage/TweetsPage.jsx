import { useState, useEffect } from "react";
import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";
import UsersList from "../../components/UsersList/UsersList";
import DropDown from "../../components/DropDown/DropDown";
import CustomBtn from "../../shared/CustomBtn/CustomBtn";

import UserFollowHook from "../../shared/hooks/UserFollowHook";

import { fiedsCase } from "./initialFieldsSwitch";
import { initialCheck, initialUsers } from "./initialState";
import { PAGE } from "../../services/MockApi/instanceApi";

import usersApi from "../../services/MockApi/user-api";

import css from "./TweetsPage.module.scss";

const TweetsPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [page, setPage] = useState(PAGE);
  const [hidden, setHidden] = useState(true);
  const [fiterUsers, setFilterUsers] = useState(initialCheck);
  const { newSetFolowing } = UserFollowHook();

  useEffect(() => {
    const fetchUser = async () => {
      switch (fiterUsers) {
        case fiedsCase.showAll:
          await usersApi.getAllUsers().then((data) => {
            setUsers(data);
          });
          break;

        case fiedsCase.follow:
          await usersApi.getFollowUsers(newSetFolowing).then((data) => {
            setUsers(data);
          });
          break;

        case fiedsCase.followings:
          await usersApi.getFollowingUsers([...newSetFolowing]).then((data) => {
            setUsers(data);
          });
          break;

        case initialCheck:
          await usersApi.getAllUsersPagination(page).then((data) => {
            if (data.length < 8) setHidden(!hidden);
            setUsers((prevState) => [...prevState, ...data]);
          });
          break;

        default:
          return;
      }
    };

    fetchUser();
  }, [page, fiterUsers]);
  const handleCheck = ({ target }) => {
    if (target.value === fiterUsers) {
      setPage(PAGE);
      setFilterUsers(initialCheck);
      setUsers(initialUsers);
      return;
    }
    setFilterUsers(target.value);
  };
  return (
    <HtmlMainMarkup>
      <section className={css.sectin_wrapper}>
        <DropDown fiterUsers={fiterUsers} handleCheck={handleCheck} />
        <UsersList users={users} />
        {hidden && fiterUsers === "" ? (
          <CustomBtn
            onClick={() => setPage((prevState) => (prevState += 1))}
            text={"Load more"}
            className={css.load_btn}
          />
        ) : null}
      </section>
    </HtmlMainMarkup>
  );
};

export default TweetsPage;
