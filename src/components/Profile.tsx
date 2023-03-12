import React from "react";

interface ProfileProps {
  name?: string;
  age: number;
  children?: string;
}

const Profile: React.FC<ProfileProps> = ({ name, age, children }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>{children}</h1>
    </div>
  );
};

export default Profile;
