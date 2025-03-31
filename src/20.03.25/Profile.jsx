import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>Welcome, {username}! 🎉</h1>
      <p>This is your profile page.</p>
    </div>
  );
};

export default Profile;
