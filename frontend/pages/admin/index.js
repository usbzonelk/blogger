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
      <Breadcrumbs links={[{ link: "/admin", title: "Admin Panel" }]} />
      <div class="container">
        <div class="buttons is-centered">
          <div class="columns is-desktop">
            <div class="column"> </div>
            <div class="column"> </div>
            <div class="column">
              <a href="/admin/posts">
                {" "}
                <button class="button is-info is-fullwidth">Posts</button>
              </a>
            </div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
