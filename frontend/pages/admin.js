import RequireAuth from "../redux/auth/RequireAuth";
import Breadcrumbs from "../components/Breadcrumbs";
const AdminPage = () => {
  /*   const ProtectedRoute = RequireAuth(SearchBar);
   */
  /*   return ProtectedRoute;
   */
  return (
    <div style={{ paddingTop: "5rem" }}>
      <Breadcrumbs
        style={{ paddingTop: "5rem" }}
        links={[
          { link: "/add", title: "456" },
          { link: "#", title: "456" },
          { link: "#", title: "456" },
          { link: "#", title: "456" },
        ]}
      />
    </div>
  );
};

export default AdminPage;
