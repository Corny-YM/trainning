import { TopBar } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";

const TopbarUserMenu = ({
  isUserMenuOpen,
  toggleIsUserMenuOpen,
}: {
  isUserMenuOpen: boolean;
  toggleIsUserMenuOpen: any;
}) => {
  console.log("re-render USER MENU");
  return (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Back to Shopify", icon: ArrowLeftMinor }],
        },
        {
          items: [{ content: "Community forums" }],
        },
      ]}
      name="Corny"
      detail="Thế Anh"
      initials="C"
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
