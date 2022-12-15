function isString(str) {
  return typeof str === "string";
}

function isEmail(text = "") {
  return text.includes("@");
}
