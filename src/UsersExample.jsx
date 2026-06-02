function UsersExample() {
  const user1 = {
    name: "Decio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, id",
    nicknames: ["decman", "decee", "dec3"],
  };
  const user2 = {
    name: "Omer",
    description:
      "Lorem ipsumdfsda;fjsdfj ads asdfjsdfasd fsd  dolor sit amet consectetur adipisicing elit. Illo, id",
    nicknames: ["omman", "ommee"],
  };
  const user3 = {
    name: "Jake",
    description:
      "Lorem ipdasdjfiasdlfm asdfm lskdfm askldfm sdsumdfsda;fjsdfj ads asdfjsdfasd fsd  dolor sit amet consectetur adipisicing elit. Illo, id",
    nicknames: ["steven", "stevee"],
  };

  const users = [user1, user2, user3];

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <UserProfile
          key={user.name}
          UserName={user.name}
          UserDescription={user.description}
          UserNicknames={user.nicknames}
        />
      ))}
    </div>
  );
}

export default UsersExample;

function UserProfile(props) {
  return (
    <div>
      <h4>{props.UserName}</h4>
      <div>
        {props.UserNicknames.map((nickname) => (
          <h6 key={nickname}>{nickname}</h6>
        ))}
      </div>
      <p>{props.UserDescription}</p>
    </div>
  );
}

//Requirement #1 we want to see a title called Users List
//Requirement #2 we want a list of users, each item in the list is username + description
