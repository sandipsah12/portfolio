export class GithubRepo {
  public id?: string;
  public name: string;
  public description: string;
  public githubUrl: string;
  public watchers: string;
  public demoUrl?: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name ? data.name : '';
    this.description = data.description ? data.description : '';
    this.githubUrl = data.url ? data.url : '';
    this.watchers = data.watchers ? data.watchers : '';
    this.demoUrl = data.demoUrl;
  }
}
