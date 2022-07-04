import { useState } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { GithubApi } from "./services/GithubApi";
import { User } from "./User";

interface UserData {
  loading: boolean;
  user: User | null;
}

export const App = () => {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState<any>({
    loading: false,
    user: null,
  });

  const getUser = async () => {
    setUserData({ ...userData, loading: true });

    const userProfile = await GithubApi.getUsers(query);
    const userRepos = await GithubApi.getRepos(query);
    const userStarred = await GithubApi.getStarred(query);

    const newUser = new User(userProfile, userRepos, userStarred);
    setUserData({ ...userData, loading: false, user: newUser });
  };

  console.log(userData);
  return (
    <ThemeProvider>
      <div className="dark">
        <div className=" min-w-screen mx-auto min-h-screen dark:bg-gray-700"></div>
      </div>
    </ThemeProvider>
  );
};

export default App;
