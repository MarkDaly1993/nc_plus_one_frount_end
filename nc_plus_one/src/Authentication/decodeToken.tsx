import { jwtDecode, type JwtPayload } from "jwt-decode";

export function decodeToken(token: string): string {
  if (!token) throw new Error("Token not found");
  const decodedToken = jwtDecode<JwtPayload>(token);
  if (!decodedToken.sub) throw new Error("Token not Found");
  return decodedToken.sub;
}
