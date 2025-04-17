require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
console.log("token verify",secretKey)
const verifyUser=async(userToken:any) =>{
  const token =userToken // token from the header
  if (!token) {
    return {status:401,error: "Token is missing"}
  }

  try {
    const payload = jwt.verify(token, secretKey); // Verify the token
    return {status:200,mgs: "Valid user",data:payload}
  } catch (err: any) {
    console.error("Invalid token:", err.message);
    return {status:403,error: err.message}
  }
}
export default verifyUser;
