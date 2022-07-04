import { GithubUserInterface, GithubRepoInterface } from "./Types";

export interface RepoInterface {
  name: string | null;
  url: string;
}
export class User {
  id?: number;
  login?: string;
  avatar?: string;
  name?: string;
  html_url?: string | null;
  blog?: string | null;
  company?: string | null;
  location?: string | null;
  followers?: number;
  following?: number;
  public_gists?: number;
  public_repos?: number;
  repos?: RepoInterface[];
  starred?: RepoInterface[];

  constructor(
    private data?: GithubUserInterface,
    private repositories?: GithubRepoInterface[],
    private userStarred?: GithubRepoInterface[]
  ) {
    if (data) {
      this.id = data.id;
      this.login = data.login;
      this.avatar = data.avatar_url;
      this.name = data.name;
      this.html_url = data.html_url;
      this.blog = data.blog;
      this.company = data.company;
      this.location = data.location;
      this.followers = data.followers;
      this.following = data.following;
      this.public_gists = data.public_gists;
      this.public_repos = data.public_repos;
    }
    if (repositories) {
      const repos = repositories.map((repo) => ({
        name: repo.name,
        url: repo.html_url,
      }));
      this.repos = repos;
    }
    if (userStarred) {
      const starred = userStarred.map((repo) => ({
        name: repo.name,
        url: repo.html_url,
      }));
      this.starred = starred;
    }
  }
}
