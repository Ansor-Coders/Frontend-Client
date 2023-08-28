export const toggleSidebar = () => {
  return {
    type: "TOGGLE_SIDEBAR",
  };
};

export const setAdminStatus = (isAdmin) => {
  return {
    type: "SET_ADMIN_STATUS",
    payload: isAdmin,
  };
};
