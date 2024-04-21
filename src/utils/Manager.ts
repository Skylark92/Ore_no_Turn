import Card from "./Card";

export default class Manager {
  private static instance: Manager;
  version: number;
  deck: Card[] = [];

  private constructor() {
    this.version = Date.now();
  }

  public static getInstance(): Manager {
    if (!Manager.instance) {
      Manager.instance = new Manager();
    }
    return Manager.instance;
  }
}
