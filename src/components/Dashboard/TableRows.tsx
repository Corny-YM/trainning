import { useNavigate } from "react-router-dom";
import { IndexTable, Link, Text } from "@shopify/polaris";
import moment from "moment";

const TableRows = ({ accounts, selectedResources }: any) => {
  const navigate = useNavigate();
  const handleClickCell = (id) => {
    navigate(`/accounts/${id}`)
  };

  return accounts.map((account: any, index) => (
    <IndexTable.Row
      id={account.id}
      key={account.id}
      selected={selectedResources.includes(account.id)}
      position={index}
    >
      <IndexTable.Cell>
        <Link
          removeUnderline
          key={account.id}
          onClick={() => handleClickCell(account.id)}
        >
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {account.name}
          </Text>
        </Link>
      </IndexTable.Cell>
      <IndexTable.Cell>{account.email}</IndexTable.Cell>
      <IndexTable.Cell>{account.phone}</IndexTable.Cell>
      <IndexTable.Cell>
        {moment(account.created_at).format("DD/MM/Y HH:mm:ss")}
      </IndexTable.Cell>
    </IndexTable.Row>
  ));
};

export default TableRows;
