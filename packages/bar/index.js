import { fromFooLibs } from "../foo/index.js";

export const fromBar = () => {
  fromFooLibs();
  console.log("From bar package, I depends the Foo package");
};
