import { getAccounts } from "@/apiCalls";
import { IndexTable, Text, useIndexResourceState } from "@shopify/polaris";
import moment from "moment";

const Table = () => {
  const [accounts, setAccounts] = useState([]);

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        // [{}, {}, ...]
        const res_accounts = await getAccounts();
        setAccounts(res_accounts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAccounts();
  }, []);

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(accounts);

  console.log(accounts);

  const rowMarkup = accounts.map((account: any, index) => (
    <IndexTable.Row
      id={account.id}
      key={account.id}
      selected={selectedResources.includes(account.id)}
      position={index}
    >
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {account.name}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{account.email}</IndexTable.Cell>
      <IndexTable.Cell>{account.phone}</IndexTable.Cell>
      <IndexTable.Cell>
        {moment(account.created_at).format("DD/MM/Y HH:mm:ss")}
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={accounts.length}
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
      {rowMarkup}
    </IndexTable>
  );
};

export default Table;
