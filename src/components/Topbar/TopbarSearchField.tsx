import { TopBar } from "@shopify/polaris";
import React from "react";

const TopbarSearchField = ({
  searchValue,
  onSearchChange,
}: {
  searchValue: string;
  onSearchChange: any;
}) => {
  return (
    <TopBar.SearchField
      onChange={onSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );
};

export default TopbarSearchField;
