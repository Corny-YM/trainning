import { TopBar } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";

const TopbarUserMenu = ({
  isUserMenuOpen,
  toggleIsUserMenuOpen,
}: {
  isUserMenuOpen: boolean;
  toggleIsUserMenuOpen: any;
}) => {
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

export default TopbarUserMenu;
