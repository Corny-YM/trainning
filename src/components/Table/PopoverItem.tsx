import { ActionList, Button, Popover } from "@shopify/polaris";
import { ReactNode } from "react";

const PopoverItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <Button fullWidth={true} disclosure="select" onClick={togglePopoverActive}>
      {title}
    </Button>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      onClose={togglePopoverActive}
    >
      {/* <ActionList
        actionRole="menuitem"
        items={[{ content: "Import" }, { content: "Export" }]}
      /> */}
      {children}
    </Popover>
  );
};

export default PopoverItem;
