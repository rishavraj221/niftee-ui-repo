import api from "./http";

const endPoint = "https://sw4kqhn1oc.execute-api.us-east-1.amazonaws.com/prod";

export function login(Email, Password) {
  return api.post(
    `${endPoint}/login`,
    {
      body: {
        Email,
        Password,
      },
      resource: "login",
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
}

export function changePassword(Email, OldPassword, NewPassword) {
  return api.post(`${endPoint}/changepassword`, {
    body: {
      Email,
      OldPassword,
      NewPassword,
    },
    resource: "changePassword",
  });
}

export function requestAccess(Email, Name, InterestInVenture) {
  return api.post(`${endPoint}/requestaccess`, {
    body: {
      Email,
      Name,
      InterestInVenture,
    },
    resource: "requestUser",
  });
}
