import {
  Badge,
  IndexTable,
  Link,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";

const resourceName = {
  singular: "voucher",
  plural: "vouchers",
};
const vouchers = [
  {
    id: "VCN005454",
    policyName: "Vé 3 tháng",
    idSKU: "WD3992I0UX6",
    idOrder: "SON26266",
    customerName: "Đỗ Ngọc Tuyến",
    duration: "3 tháng",
    activationDate: "23/05/2023",
    expirationDate: "22/08/2023",
    status: 1,
  },
  {
    id: "VCN005453",
    policyName: "Vé 6 tháng",
    idSKU: "WD5999IUZZ7",
    idOrder: "SON26266",
    customerName: "NGUYEN NGOC LINH DAN",
    duration: "6 tháng",
    activationDate: "---",
    expirationDate: "---",
    status: 0,
  },
  {
    id: "VCN005452",
    policyName: "Vé 6 tháng",
    idSKU: "WD5995I0PX5",
    idOrder: "SON26266",
    customerName: "Nguyễn Thị Ngọc",
    duration: "6 tháng",
    activationDate: "---",
    expirationDate: "---",
    status: 0,
  },
];

const ContentTable = () => {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(vouchers);

  const rowMarkup = vouchers.map((voucher, index) => (
    <IndexTable.Row
      id={voucher.id}
      key={voucher.id}
      selected={selectedResources.includes(voucher.id)}
      position={index}
    >
      <IndexTable.Cell>
        <Link removeUnderline>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {voucher.id}
          </Text>
        </Link>
      </IndexTable.Cell>
      <IndexTable.Cell>{voucher.policyName}</IndexTable.Cell>
      <IndexTable.Cell>
        <Link removeUnderline>{voucher.idSKU}</Link>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Link removeUnderline>{voucher.idOrder}</Link>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Link removeUnderline>{voucher.customerName}</Link>
      </IndexTable.Cell>
      <IndexTable.Cell>{voucher.duration}</IndexTable.Cell>
      <IndexTable.Cell>{voucher.activationDate}</IndexTable.Cell>
      <IndexTable.Cell>{voucher.expirationDate}</IndexTable.Cell>
      <IndexTable.Cell>
        <Badge
          status={voucher.status == 1 ? "success" : "info"}
          progress={voucher.status == 1 ? "complete" : "incomplete"}
        >
          {voucher.status == 1 ? "Kích hoạt" : "Chưa kích hoạt"}
        </Badge>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <div className="margin-top-16">
      <IndexTable
        resourceName={resourceName}
        itemCount={vouchers.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Mã Voucher
              </Text>
            ),
            id: "1",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Tên chính sách(deal)
              </Text>
            ),
            id: "2",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Mã SKU
              </Text>
            ),
            id: "3",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Mã đơn hàng
              </Text>
            ),
            id: "4",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Tên người mua
              </Text>
            ),
            id: "5",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Thời hạn
              </Text>
            ),
            id: "6",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Ngày kích hoạt
              </Text>
            ),
            id: "7",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Ngày hết hạn
              </Text>
            ),
            id: "8",
          },
          {
            title: (
              <Text as="p" variant="headingSm" fontWeight="bold">
                Trạng thái
              </Text>
            ),
            id: "9",
          },
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </div>
  );
};

export default ContentTable;
