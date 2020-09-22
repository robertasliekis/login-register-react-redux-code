const initialState = {
  users: [
    { id: "id1", email: "user1@mail.com", password: "123" },
    {
      id: "id2",
      email: "user2@mail.com",
      password: "123",
    },
    {
      id: "id3",
      email: "123@123.lt",
      password: "123",
    },
  ],
};

const userAdder = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, users: state.users.concat(action.payload) };
    default:
      return state;
  }
};

export default userAdder;
