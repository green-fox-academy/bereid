// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(string: string): string {
  if (string.indexOf("x") === -1) {
    return string;
  } else {
    string = string.replace("x", "");
    return removeX(string);
  }
}

console.log(removeX("Xiaomi, Lexus, luxus, Nexus 10"))