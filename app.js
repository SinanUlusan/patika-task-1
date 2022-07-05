import axios from "axios";

export const getData = async (id) => {
  const { data: getUser } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const { data: getPost } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );

  return { getUser, getPost };
};
