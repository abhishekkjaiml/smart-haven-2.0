import { auth } from "../services/firebase";

export const UseSetting = () => {

  const isDemo =
    localStorage.getItem("smarthaven_dummy_user") === "true";

  const user = auth.currentUser;

  const current_username = user?.displayName || "User";

  const userEmail = user?.email || "NA";

  const contact_number = user?.phoneNumber || "NA";

  const _UUID = user?.uid || "NA";

  const profilePhoto = user?.photoURL;

  const varifyEmail = user?.emailVerified || false;

  const userFirstName = current_username.split(" ")[0] || "";

  const userLastName = current_username.split(" ").slice(1).join(" ") || "";


  return {

    user,
    current_username,
    isDemo,
    userEmail,
    contact_number,
    _UUID,
    profilePhoto,
    varifyEmail,
    userFirstName,
    userLastName,

  };
};