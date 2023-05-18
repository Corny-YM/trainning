import { getAccounts } from "@/apiCalls";
import { IndexTable, Loading, useIndexResourceState } from "@shopify/polaris";
import TableRows from "./TableRows";
import { useQuery } from "@tanstack/react-query";

const Table = () => {
  // TanStack
  const accountQuery = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(),
  });

  const [accounts, setAccounts] = useState([]);

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  useEffect(() => {
    setAccounts(accountQuery.data);
  }, [accountQuery.isFetching]);

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(accounts);

  return (
    <>
      {accountQuery.isFetching && <Loading />}
      <IndexTable
        resourceName={resourceName}
        itemCount={accounts?.length}
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
        <TableRows accounts={accounts} selectedResources={selectedResources} />
      </IndexTable>
    </>
  );
};

export default Table;
