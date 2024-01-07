import { PrivateRoute } from "app";

const PrivatePage: React.FC = () => {
  return <PrivateRoute redirectTo="/" />;
};

export default PrivatePage;
