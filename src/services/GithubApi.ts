import axios from "axios";
import { GithubRepoInterface, GithubUserInterface } from "../Types";

export class GithubApi {
  static async getUsers(query: string) {
    const res = await axios.get(`https://api.github.com/users/${query}`);
    return res.data as GithubUserInterface;
  }
  static async getRepos(query: string) {
    const res = await axios.get(`https://api.github.com/users/${query}/repos`);
    return res.data as GithubRepoInterface[];
  }
  static async getStarred(query: string) {
    const res = await axios.get(
      `https://api.github.com/users/${query}/starred`
    );
    return res.data as GithubRepoInterface[];
  }
}
