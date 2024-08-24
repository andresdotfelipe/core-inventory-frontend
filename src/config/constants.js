/*
    Production: https://coreinventoryapi.onrender.com/api
    Development: http://localhost:4000/api
*/
export const config = {
  api: "https://coreinventoryapi.onrender.com/api",
};

/*
    Regex:
    - numberInput: Matches positive integers of maximum 7 digits with no leading zeros OR a single zero.
*/
export const regex = {
  numberInput: /^(?:[1-9]|[1-9][0-9]{1,6}|0)$/,
};
