export const formValidate = (
  email: string | null,
  password: string | null,
  name?: string | null
) => {
  if (email != null && password != null && name != null) {
    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid =
      /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isNameValid = name.trim().length >= 3 && !/\s/.test(name);
    if (!isNameValid) return "Name is not valid";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  }

  return null;
};
