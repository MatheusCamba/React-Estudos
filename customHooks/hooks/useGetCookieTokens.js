export const getCookieTokens = () => {
  const getCookie = (tokenType) =>
    document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith(`${tokenType}`))
      ?.split("=")[1];

  const accessToken = getCookie("token");
  const refreshToken = getCookie("refreshToken");

  return { accessToken, refreshToken };
};
