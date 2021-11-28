const checkCurrentUserExistence = "user";

export const logout = () => {
  localStorage.removeItem(checkCurrentUserExistence);
};

export const login = (userName: string) => {
  localStorage.setItem(checkCurrentUserExistence, userName);
};

export const currentUserExists = (): boolean => !!localStorage.getItem(checkCurrentUserExistence);
export const getCurrentUser = () => localStorage.getItem(checkCurrentUserExistence);