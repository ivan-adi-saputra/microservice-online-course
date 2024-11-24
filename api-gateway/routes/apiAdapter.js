const axios = require("axios");
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: TIMEOUT, // untuk pembatasan ketika service tidak ada respose ( example: service media tidak ada response 5 detik (sesuai di timeout) maka akan mengembalikan response bahwa service media tidak ada respose )
  });
};
