import RequireAuth from "../../redux/auth/RequireAuth";
import Breadcrumbs from "../../components/Breadcrumbs";

const AdminPage = () => {
  /*   const ProtectedRoute = RequireAuth(SearchBar);
   */
  /*   return ProtectedRoute;
   */
  return (
    <div
      style={{ paddingTop: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <Breadcrumbs links={[{ link: "/admin", title: "Admin" }]} />
      <div class="container">
        <div class="buttons is-centered">
          <div class="columns is-desktop">
            <div class="column">
              {" "}
              <a href="/admin/settings">
                {" "}
                <button class="button is-primary is-fullwidth">Settings</button>
              </a>{" "}
            </div>
            <div class="column">
              {" "}
              <a href="/admin/users">
                {" "}
                <button class="button is-link is-fullwidth">Users</button>
              </a>
            </div>
            <div class="column">
              <a href="/admin/posts">
                {" "}
                <button class="button is-info is-fullwidth">Posts</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
