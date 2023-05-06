export const getTokenFromHeaders = (headers: any): string => {
  const authHeader = headers.authorization;
  return authHeader.split(' ')[1];
};
