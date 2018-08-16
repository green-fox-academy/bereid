// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeXtoY(string: string): string {
  if (string.indexOf("x") === -1) {
    return string;
  } else {
    string = string.replace("x", "y");
    return changeXtoY(string);
  }
}

console.log(changeXtoY("Xiaomi, Lexus, luxus, Nexus 10"))