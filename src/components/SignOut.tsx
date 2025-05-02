import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

export function LogoutButton() {
  const logout = async () => {
    await signOut(auth);
    console.log("User signed out");
  };

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
    >
      Sign Out
    </button>
  );
}
