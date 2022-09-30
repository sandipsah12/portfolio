import { Component, OnInit } from '@angular/core';
import { GithubRepoService } from './github-repo.service';
import { GithubRepo } from './githubRepo.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public liveRepos: GithubRepo[] = [];
  public otherRepos: GithubRepo[] = [];

  constructor(public githubRepoService: GithubRepoService) {}

  ngOnInit(): void {
    this.githubRepoService.getMyRepos().subscribe((repos: GithubRepo[]) => {
      this.liveRepos = repos.filter((repo) => repo.watchers);
      this.otherRepos = repos.filter((repo) => !repo.watchers);

      this.liveRepos.forEach((repo) => {
        if (repo.name === '100 Angular Challenges')
          repo.demoUrl = 'https://angular-challenges.netlify.app/';
        if (repo.name === 'React Sorting Visualizer')
          repo.demoUrl = 'https://sortingvisualizerreact.netlify.app/';
      });

      const temp = this.liveRepos[1];
      this.liveRepos[1] = this.liveRepos[0];
      this.liveRepos[0] = temp;
    });
  }
}
