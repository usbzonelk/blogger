import Login from "../../components/Login";

const RequireAuth = (Component) => {
  const token = true;

  return token ? (
    <div style={{ marginTop: "5rem" }}>
      <Component />
    </div>
  ) : (
    <div style={{ marginTop: "5rem" }}>
      <Login />
    </div>
  );
};

export default RequireAuth;
