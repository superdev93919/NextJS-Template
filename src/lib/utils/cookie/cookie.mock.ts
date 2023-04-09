import type { CookieMock } from "./cookie.type";

export const singleCookie: CookieMock = {
  string: "sessionID=1234",
  object: [
    { name: "sessionID", value: "1234" }
  ]
};

export const multipleCookies: CookieMock = {
  string: "sessionID=1234; username=john_doe; auth_token=abc123",
  object: [
    { name: "sessionID", value: "1234" },
    { name: "username", value: "john_doe" },
    { name: "auth_token", value: "abc123" }
  ]
};

export const whitespaceCookies: CookieMock = {
  string: " sessionID = 1234 ;  username = john_doe ; auth_token=abc123  ",
  object: multipleCookies.object
};

export const encodedCookies: CookieMock = {
  string: "name=John%20Doe; age=25",
  object: [
    { name: "name", value: "John Doe" },
    { name: "age", value: "25" }
  ]
};