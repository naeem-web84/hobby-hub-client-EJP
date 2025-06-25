import { useEffect } from "react";
import { useLocation } from "react-router";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titleMap = {
      "/": "Home | HobbyHub",
      "/login": "Login | HobbyHub",
      "/register": "Register | HobbyHub",
      "/allGroups": "All Groups | HobbyHub",
      "/createGroup": "Create Group | HobbyHub",
      "/myGroups": "My Groups | HobbyHub",
      "/about": "About Us | HobbyHub",
      "/urbanSketchingDetails": "Urban Sketching | HobbyHub",
      "/runningDetails": "Running | HobbyHub",
      "/fishingDetails": "Fishing | HobbyHub",
      "/photographyDetails": "Photography | HobbyHub",
    };

    // Handle dynamic routes like groupDetails/:id
    if (path.startsWith("/groupDetails/")) {
      document.title = "Group Details | HobbyHub";
    } else if (path.startsWith("/updateGroup/")) {
      document.title = "Update Group | HobbyHub";
    } else {
      document.title = titleMap[path] || "HobbyHub";
    }
  }, [location]);

  return null;
};

export default TitleUpdater;
