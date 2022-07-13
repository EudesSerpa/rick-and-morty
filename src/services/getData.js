import { API_URL } from "./setting";

const getData = async ({ endpoint, page = null }) => {
  try {
    const url = `${
      page ? `${API_URL}/${endpoint}?page=${page}` : `${API_URL}/${endpoint}`
    }`;

    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error({ err });
  }
};

export default getData;
