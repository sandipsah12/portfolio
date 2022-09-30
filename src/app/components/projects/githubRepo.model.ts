export class GithubRepo {
  public id?: string;
  public name: string;
  public description: string;
  public url: string;
  public watchers: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name ? data.name : '';
    this.description = data.description ? data.description : '';
    this.url = data.url ? data.url : '';
    this.watchers = data.watchers ? data.watchers : '';
  }
}
