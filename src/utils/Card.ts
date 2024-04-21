export default class 카드 {
  name: string;
  desc: string;
  img?: string;
  constructor(name: string, desc: string, img?: string) {
    this.name = name;
    this.desc = desc;
    this.img = img;
  }
}
