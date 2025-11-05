const checkValidData = (email, password) => {
  // ✅ Email regex pattern (valid basic email format)
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // ✅ Password regex pattern
  // At least one lowercase, one uppercase, one digit, one special char, and minimum 8 chars
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // 🧠 Logical checks
  if (!isEmailValid) return "Email ID is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null; // ✅ Everything is valid
};

export default checkValidData;
