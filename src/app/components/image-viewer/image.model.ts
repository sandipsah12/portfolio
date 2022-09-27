export class Image {
  public id?: string;
  public imageSrc: string;
  public imageDetail: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.imageSrc = data.imageSrc ? data.imageSrc : '';
    this.imageDetail = data.imageDetail ? data.imageDetail : '';
  }
}
