import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GithubRepo } from './githubRepo.model';

@Injectable({
  providedIn: 'root',
})
export class GithubRepoService {
  constructor(private http: HttpClient) {}

  public getMyRepos() {
    return this.http.get('https://api.github.com/users/sandipsah12/repos').pipe(
      map((data: any) => {
        return data.map((data: any) => {
          const mappedData = new GithubRepo();
          mappedData.id = data.id;
          mappedData.description = data.description;
          mappedData.name = data.name
            .split('-')
            .map((el: string) => el[0].toUpperCase() + el.slice(1))
            .join(' ');
          mappedData.githubUrl = data.html_url;
          mappedData.watchers = data.watchers;

          return mappedData;
        });
      })
    );
  }
}
