import {IBase} from "./IBase";

export class Widget implements IBase {

  constructor(public name:string,public color:string) {}

  public classname: string = "Widget";

}
