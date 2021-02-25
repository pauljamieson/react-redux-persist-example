const strings = (stringName) => {
  switch (stringName) {
    case "app_name":
      return "Persist App";
    case "copyright":
      return "\u00A9 Paul Jamieson";
    default:
      return "";
  }
};

export default strings;
