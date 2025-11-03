import UserList from "./UserList";
function App() {
  const users = [
    { id: 1, name: "samatar", email: "sammed384@gmail.com" },
    { id: 2, name: "mohamed", email: "mohamed@gmail.com" },
  ];
  // const users1= [1,"samatar","sammed384"]

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
