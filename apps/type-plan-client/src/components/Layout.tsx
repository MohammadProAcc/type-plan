import { LayoutContainer } from "elements";
import { LayoutNavbar } from "./organisms";

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutNavbar />
      {children}
    </LayoutContainer>
  );
};
