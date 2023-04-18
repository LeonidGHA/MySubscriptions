import { instanceUser, PER_PAGE, PAGE } from "./instanceApi";

const usersApi = {
  async getAllUsersPagination(page) {
    const { data } = await instanceUser.get(`/Users`, {
      params: {
        page: page,
        limit: PER_PAGE,
      },
    });
    return data;
  },

  async getAllUsers() {
    const { data } = await instanceUser.get(`/Users`);
    return data;
  },

  async getFollowingUsers(arrayId) {
    const arrayOfPromise = arrayId.map(async (el) => {
      const { data } = await instanceUser.get(`/Users/${el}`);

      return data;
    });
    const followingUsers = await Promise.all(arrayOfPromise);
    return followingUsers;
  },

  async getFollowUsers(setId) {
    const { data } = await instanceUser.get(`/Users`);
    const filteredUsers = data.filter((el) => (setId.has(el.id) ? null : el));

    return filteredUsers;
  },

  async putUsersFollow(id, value) {
    await instanceUser.put(`/Users/${id}`, {
      followers: value,
    });
  },
};

export default usersApi;
