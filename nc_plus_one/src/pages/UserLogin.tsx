import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useUser } from "../hooks/useUser";

interface FormValues {
  email: string;
  password: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function UserLogin() {
  const [input, setInput] = useState<FormValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const { userLogin } = useUser();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);

    const formErrors = validate(input);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    userLogin(input.email, input.password);
  };

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (values.email.trim() === "") errors.email = "Email is required.";
    if (values.password.trim() === "") errors.password = "Password is required";
    return errors;
  };

  const handleFieldChange =
    (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement>) => {
      setInput((currInput) => ({ ...currInput, [field]: event.target.value }));
    };

  return (
    <>
      <h2>Login to your account</h2>
      <form className="user-login-details" onSubmit={handleSubmit}>
        <label htmlFor="user-email">Please Enter Your Email</label>
        <input
          id="user-email"
          name="email"
          type="text"
          placeholder="email"
          value={input.email}
          onChange={handleFieldChange("email")}
          aria-invalid={errors.email !== undefined}
          aria-describedby={errors.email ? "Email-error" : undefined}
        ></input>
        <label htmlFor="user-password">Please Enter Your Password</label>
        <input
          id="user-password"
          name="password"
          type="text"
          placeholder="password"
          value={input.password}
          onChange={handleFieldChange("password")}
          aria-invalid={errors.password !== undefined}
          aria-describedby={errors.password ? "Password-error" : undefined}
        ></input>
        <button type="submit">Login In</button>
      </form>
    </>
  );
}
