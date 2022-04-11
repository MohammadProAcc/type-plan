import { LayoutChildrenContainer, LayoutContainer } from "elements";
import { LayoutNavbar } from "./organisms";
import { LayoutFooter } from "./organisms/LayoutFooter";

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutNavbar />
      <LayoutChildrenContainer>
        {children}
      </LayoutChildrenContainer>
      <LayoutFooter />
    </LayoutContainer>
  );
};
