import API_URL from "./setting";

const getData = async ({ endpoint }) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    return await res.json();
  } catch (err) {
    console.error({ err });
  }
};

export default getData;
