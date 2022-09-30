import { Component, OnInit } from '@angular/core';
import { GithubRepoService } from './github-repo.service';
import { GithubRepo } from './githubRepo.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public repos: GithubRepo[] = [];
  constructor(public githubRepoService: GithubRepoService) {}

  ngOnInit(): void {
    this.githubRepoService.getMyRepos().subscribe((repos: GithubRepo[]) => {
      this.repos = repos;
    });
  }
}
