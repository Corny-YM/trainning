import { TopBar } from "@shopify/polaris";
import { LogOutMinor } from "@shopify/polaris-icons";

import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const TopbarUserMenu = ({
  isUserMenuOpen,
  toggleIsUserMenuOpen,
}: {
  isUserMenuOpen: boolean;
  toggleIsUserMenuOpen: any;
}) => {
  const { user, dispatch }: any = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_in");
    dispatch({type: "LOGOUT"})
    navigate("/login");
  };

  return (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: "Log out",
              icon: LogOutMinor,
              onAction: handleLogout,
            },
          ],
        },
        {
          items: [{ content: "User information" }],
        },
      ]}
      name={user.name}
      detail={user.role}
      initials={user.name[0]}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );
};

const arePropsEqual = (prevProps: any, nextProps: any) => {
  return (
    prevProps.isUserMenuOpen === nextProps.isUserMenuOpen &&
    prevProps.toggleIsUserMenuOpen === nextProps.toggleIsUserMenuOpen
  );
};

export default memo(TopbarUserMenu, arePropsEqual);
