import { ActionList } from "@shopify/polaris";

const SearchResultActionList = () => {
  return (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );
};

export default SearchResultActionList;
