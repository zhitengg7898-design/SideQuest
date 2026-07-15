import { useParams } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();

  return (
    <section>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </section>
  );
}

export default ProfilePage;