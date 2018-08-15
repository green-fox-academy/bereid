//Create a PostIt a class that has
// - a backgroundColor
// - a text on it
// - a textColor
//Create a few example post-it objects:
// - an orange with blue text: "Idea 1"
// - a pink with black text: "Awesome"
// - a yellow with green text: "Superb!"

class PostIt {
  private backgroundcolor: string;
  private textcolor: string;
  private text: string;
  constructor (backgroundcolor: string, textcolor: string, text: string){
    this.backgroundcolor = backgroundcolor;
    this.textcolor = textcolor;
    this.text = text;
  }
}

let postIt1: PostIt = new PostIt("orange", "blue", "Idea 1");
let postIt2: PostIt = new PostIt("pink", "black", "Awesome");
let postIt3: PostIt = new PostIt("yellow", "green", "Superb!");

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);