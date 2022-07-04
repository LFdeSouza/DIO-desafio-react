import { useState } from "react";
import { RepoInterface, User } from "../../User";
import Repo from "./Repo";

interface Props {
  user: User | null;
}
const Profile: React.FC<Props> = ({ user }) => {
  const [display, setDisplay] = useState("repos");

  const renderRepos = (repos: RepoInterface[] | undefined) =>
    repos && repos.map((repo: RepoInterface) => <Repo repo={repo} />);

  return (
    user && (
      <main className="mx-auto flex flex-col items-center justify-center p-8 md:max-w-5xl md:p-10">
        <section className="md:flex md:items-center md:gap-10">
          <img
            src={user.avatar}
            alt="profile"
            className="mx-auto mb-4 h-48 w-48 rounded-full bg-cover"
          />
          <div className="font-semibold text-gray-800 md:text-lg">
            <h2 className="text-xl font-bold md:text-2xl">{user.name}</h2>
            <h4>
              Username:{" "}
              <span className="text-sm font-normal md:text-base">
                {user.login}
              </span>
            </h4>
            <h4>
              Company:{" "}
              <span className="text-sm font-normal md:text-base">
                {user.company}
              </span>
            </h4>
            <h4>
              Location:{" "}
              <span className="text-sm font-normal md:text-base">
                {user.location}
              </span>
            </h4>
            <h4>
              Blog:{" "}
              <a
                href="/"
                className="text-sm font-normal text-blue-700 md:text-base"
              >
                {user.blog}
              </a>
            </h4>

            <div className="flex items-center justify-between">
              <div className=" flex flex-col items-center">
                <h4>Followers</h4>
                <p className="text-sm font-normal md:text-base">
                  {user.followers}
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <h4>Following</h4>
                <p className="text-sm font-normal md:text-base">
                  {user.following}
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <h4>Gists</h4>
                <p className="text-sm font-normal md:text-base">
                  {user.public_gists}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-4 flex w-6/12 items-center justify-between gap-4">
          <button
            onClick={() => setDisplay("repos")}
            className="w-full rounded bg-blue-700 p-2 px-3 text-white hover:bg-blue-600"
          >
            Repos
          </button>
          <button
            onClick={() => setDisplay("starred")}
            className="w-full rounded bg-blue-700 p-2 px-3 text-white hover:bg-blue-600"
          >
            Starred
          </button>
        </div>
        <section className="mt-8 w-full gap-5 md:flex md:flex-wrap md:justify-center ">
          {display === "repos"
            ? renderRepos(user.repos)
            : renderRepos(user.starred)}
        </section>
      </main>
    )
  );
};

export default Profile;
