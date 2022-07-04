import { useState } from "react";
import { GithubApi } from "./services/GithubApi";
import { User } from "./User";
import Form from "./components/query/Form";
import Profile from "./components/query/Profile";
import Header from "./components/shared/Header";
import Spinner from "./components/shared/Spinner";

interface UserData {
  loading: boolean;
  user: User | null;
}

export const App = () => {
  const [userData, setUserData] = useState<UserData>({
    loading: false,
    user: null,
  });

  console.log(userData);

  const getUser = async (query: string) => {
    setUserData({ ...userData, loading: true });

    const userProfile = await GithubApi.getUsers(query);
    const userRepos = await GithubApi.getRepos(query);
    const userStarred = await GithubApi.getStarred(query);

    const newUser = new User(userProfile, userRepos, userStarred);
    setUserData({ ...userData, loading: false, user: newUser });
  };

  return (
    <div className="font-sans">
      <Header />
      <Form getUser={getUser} />
      {userData.loading && <Spinner />}
      {userData && <Profile user={userData.user} />}
    </div>
  );
};

export default App;
