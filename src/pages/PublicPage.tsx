import { PublicRoute } from "app";

const PublicPage: React.FC = () => {
  return <PublicRoute restricted redirectTo="/desktop" />;
};

export default PublicPage;
