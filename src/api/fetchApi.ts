import { ContactFormRequest } from "../domain/interfaces";

const fetchReq = require("node-fetch");

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const makeGet = async (form: ContactFormRequest) => {
  let fetchData = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode({ "form-name": "contact", form }),
  };

  return await fetchReq("/", fetchData, {
    method: "POST",
    /* tslint:disable-next-line */
  }).then((res: { json: () => any }) => res.json());
};
