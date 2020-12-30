import { ContactFormRequest } from "../domain/interfaces";

const fetchReq = require("node-fetch");

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const makeGet = async (form: ContactFormRequest) => {
  console.log("making post");
  const x = encode(form);
  let fetchData = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode({ "form-name": "contact", x }),
  };

  return await fetchReq("/", fetchData, {
    method: "POST",
    /* tslint:disable-next-line */
  })
    .then(() => console.log("done"))
    .catch((error) => alert(error));
};
