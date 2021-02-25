const strings = (stringName) => {
  switch (stringName) {
    case "app_name":
      return "Persist App";
    case "path1":
      return "You have chosen path 1!";
    case "path2":
      return "Path 2 is a wise choice!";
    case "path3":
      return "Path 3 is here but should be a component";
    case "root_path":
      return "This is the alpha and the omega.";
    case "copyright":
      return "\u00A9 Paul Jamieson";
    default:
      return "";
  }
};

export default strings;
