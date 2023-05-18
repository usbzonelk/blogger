import RequireAuth from "../redux/auth/RequireAuth";
import SearchBar from "../components/SearchBar";

const AdminPage = () => {
  const ProtectedRoute = RequireAuth(SearchBar);
  
  return ProtectedRoute;
};

export default AdminPage;
