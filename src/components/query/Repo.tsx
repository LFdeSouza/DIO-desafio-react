import React from "react";
import { RepoInterface } from "../../User";

interface Props {
  repo: RepoInterface;
}

const Repo: React.FC<Props> = ({ repo }) => {
  return (
    <div className=" flex h-24 min-h-[5rem] w-10/12 flex-grow flex-col justify-center rounded-lg bg-blue-300 p-4 shadow-md md:max-w-[17rem]">
      <h4 className="mb-2 break-words text-lg font-semibold text-gray-900">
        {repo.name}
      </h4>
      <a
        href={repo.url}
        className="block break-words pb-2 text-sm text-blue-900"
      >
        {repo.url}
      </a>
    </div>
  );
};

export default Repo;
