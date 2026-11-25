export const readToken = (): string | null => {
  return localStorage.getItem("token");
};

export const writeToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const clearToken = (): void => {
  localStorage.removeItem("token");
};
