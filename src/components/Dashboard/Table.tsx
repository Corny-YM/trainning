import { getAccounts } from "@/apiCalls";
import { IndexTable, Loading, useIndexResourceState } from "@shopify/polaris";
import TableRows from "./TableRows";
import { useQuery } from "@tanstack/react-query";

const resourceName = {
  singular: "account",
  plural: "accounts",
};

const Table = () => {
  // TanStack
  const accountsQuery = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(),
  });

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(accountsQuery.data);

  return (
    <>
      {accountsQuery.isFetching && <Loading />}
      <IndexTable
        resourceName={resourceName}
        itemCount={accountsQuery.data?.length || 0}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Thông tin" },
          { title: "Email" },
          { title: "Số điện thoại" },
          { title: "Ngày tạo" },
        ]}
      >
        <TableRows
          accounts={accountsQuery.data}
          selectedResources={selectedResources}
        />
      </IndexTable>
    </>
  );
};

export default Table;
