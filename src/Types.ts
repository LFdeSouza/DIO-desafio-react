import React from "react";

export type Props = {
  children: React.ReactNode;
};

export interface GithubUserInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GithubRepoInterface {
  allow_forking: boolean;
  archive_url: string | null;
  archived: boolean;
  assignees_url: string | null;
  blobs_url: string | null;
  branches_url: string | null;
  clone_url: string | null;
  collaborators_url: string | null;
  comments_url: string | null;
  commits_url: string | null;
  compare_url: string | null;
  contents_url: string | null;
  contributors_url: string | null;
  created_at: string | null;
  default_branch: string | null;
  deployments_url: string | null;
  description: string | null;
  disabled: boolean;
  downloads_url: string | null;
  events_url: string | null;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string | null;
  full_name: string | null;
  git_commits_url: string | null;
  git_refs_url: string | null;
  git_tags_url: string | null;
  git_url: string | null;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  hooks_url: string | null;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string | null;
  issue_events_url: string | null;
  issues_url: string | null;
  keys_url: string | null;
  labels_url: string | null;
  language: string | null;
  languages_url: string | null;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
    node_id: string;
  };
  merges_url: string | null;
  milestones_url: string | null;
  mirror_url: null;
  name: string;
  node_id: string | null;
  notifications_url: string | null;
  open_issues: number;
  open_issues_count: number;
  owner: GithubUserInterface;
  private: boolean;
  pulls_url: string | null;
  pushed_at: string | null;
  releases_url: string | null;
  size: number;
  ssh_url: string | null;
  stargazers_count: number;
  stargazers_url: string | null;
  statuses_url: string | null;
  subscribers_url: string | null;
  subscription_url: string | null;
  svn_url: string | null;
  tags_url: string | null;
  teams_url: string | null;
  topics: any[];
  trees_url: string | null;
  updated_at: string | null;
  url: string;
  visibility: string | null;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
}