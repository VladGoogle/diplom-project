export const getTokenFromHeaders = (headers: any): string | undefined => {
  if (headers.authorization === undefined) {
    return undefined;
  } else {
    const authHeader = headers.authorization;
    return authHeader.split(' ')[1];
  }
};
