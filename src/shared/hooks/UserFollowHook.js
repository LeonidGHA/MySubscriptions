import { useState, useEffect } from "react";

const UserFollowHook = () => {
  try {
    if (!localStorage.getItem("followers")) {
      localStorage.setItem("followers", JSON.stringify([]));
    }
    const followingLocalStorage = JSON.parse(localStorage.getItem("followers"));

    const newSetFolowing = new Set(followingLocalStorage);

    const toggleFollowUser = (id) => {
      if (newSetFolowing.has(id)) {
        newSetFolowing.delete(id);

        localStorage.setItem("followers", JSON.stringify([...newSetFolowing]));
        return;
      }

      newSetFolowing.add(id);
      localStorage.setItem("followers", JSON.stringify([...newSetFolowing]));
    };

    return { toggleFollowUser, newSetFolowing };
  } catch (error) {
    console.log(error);
  }
};

export default UserFollowHook;
