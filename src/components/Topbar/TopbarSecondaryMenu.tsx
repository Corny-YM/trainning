import { Icon, TopBar, Text } from "@shopify/polaris";
import { QuestionMarkMajor } from "@shopify/polaris-icons";

const TopbarSecondaryMenu = ({
  isSecondaryMenuOpen,
  toggleIsSecondaryMenuOpen,
}: {
  isSecondaryMenuOpen: boolean;
  toggleIsSecondaryMenuOpen: any;
}) => {
  return (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={QuestionMarkMajor} />
          <Text as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: "Community forums" }],
        },
      ]}
    />
  );
};

export default TopbarSecondaryMenu;
