import { TopBar } from "@shopify/polaris";

const TopbarSearchField = ({
  searchValue,
  onSearchChange,
}: {
  searchValue: string;
  onSearchChange: any;
}) => {
  console.log("re-render SEARCH FIELD");
  return (
    <TopBar.SearchField
      onChange={onSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );
};

const arePropsEqual = (prevProps: any, nextProps: any) => {
  return (
    prevProps.searchValue === nextProps.searchValue &&
    prevProps.onSearchChange === nextProps.onSearchChange
  );
};

export default memo(TopbarSearchField, arePropsEqual);
