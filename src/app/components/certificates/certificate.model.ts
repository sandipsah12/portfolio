export class Certificate {
  public id?: string;
  public title: string;
  public imageSrc: string;
  public imageDetail: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.title = data.title ? data.title : '';
    this.imageSrc = data.imageSrc ? data.imageSrc : '';
    this.imageDetail = data.imageDetail ? data.imageDetail : '';
  }
}
