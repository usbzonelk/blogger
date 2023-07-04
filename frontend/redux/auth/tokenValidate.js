import jwtDecode from "jwt-decode";

const validateToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const expirationDate = new Date(decodedToken.exp * 1000);

    if (expirationDate < new Date()) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export default validateToken;
