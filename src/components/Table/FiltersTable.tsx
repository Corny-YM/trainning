import {
  ActionList,
  Box,
  Button,
  ButtonGroup,
  ChoiceList,
  Filters,
  HorizontalStack,
  Text,
  TextField,
} from "@shopify/polaris";
import PopoverItem from "./PopoverItem";

const orderItems = [
  {
    title: "Sắp xếp id",
    children: (
      <HorizontalStack align="center">
        <ActionList
          actionRole="menuitem"
          items={[{ content: "Import" }, { content: "Export" }]}
        />
      </HorizontalStack>
    ),
  },
  {
    title: "Thứ tự giảm dần",
    children: (
      <HorizontalStack align="center">
        <ActionList
          actionRole="menuitem"
          items={[{ content: "Import" }, { content: "Export" }]}
        />
      </HorizontalStack>
    ),
  },
];

const FiltersTable = () => {
  const [taggedWith, setTaggedWith] = useState<string | undefined>("");
  const [queryValue, setQueryValue] = useState<string | undefined>("");
  const [inputDate, setInputDate] = useState<string | undefined>("");

  const filters = [
    {
      key: "status",
      label: "Trạng thái",
      filter: (
        <Box width="250px">
          <ButtonGroup>
            <Button>Kích hoạt</Button>
            <Button>Hủy kích hoạt</Button>
            <Button>Chưa kích hoạt</Button>
            <Button>Đã hết hạn</Button>
          </ButtonGroup>
        </Box>
      ),
      shortcut: true,
    },
    {
      key: "activationDate",
      label: "Ngày kích hoạt",
      filter: (
        <TextField
          label=""
          placeholder="DD/MM/YYYY"
          value={inputDate}
          onChange={(str: string) => setInputDate(str)}
          autoComplete="off"
        />
      ),
      shortcut: true,
    },
    {
      key: "endDate",
      label: "Ngày kết thúc",
      filter: <Text as="p">Corny</Text>,
      shortcut: true,
    },
    {
      key: "customers",
      label: "Khách hàng",
      filter: <Text as="p">Corny</Text>,
      shortcut: true,
    },
    {
      key: "parents",
      label: "Bố/mẹ bé",
      filter: <Text as="p">Corny</Text>,
      shortcut: true,
    },
    {
      key: "accountStatus",
      label: "Account status",
      filter: (
        <ChoiceList
          title="Account status"
          titleHidden
          choices={[
            { label: "Enabled", value: "enabled" },
            { label: "Not invited", value: "not invited" },
            { label: "Invited", value: "invited" },
            { label: "Declined", value: "declined" },
          ]}
          selected={[]}
          onChange={() => {}}
          allowMultiple
        />
      ),
      shortcut: true,
    },
    {
      key: "taggedWith",
      label: "Tagged with",
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={(str: string) => setTaggedWith(str)}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  // Search
  const handleFiltersQueryChange = useCallback((str: string) => {
    setQueryValue(str);
  }, []);
  const handleQueryValueRemove = useCallback(() => {
    setQueryValue(undefined);
  }, []);

  // Filters
  const handleFiltersClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, []);

  return (
    <Filters
      queryValue={queryValue}
      queryPlaceholder="Tìm kiếm theo tên hoặc mã Voucher, mã đơn hàng"
      filters={filters}
      appliedFilters={[]}
      onQueryChange={handleFiltersQueryChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleFiltersClearAll}
    >
      {/* Another filter */}
      <div className="center margin-left-8">
        {orderItems.map((item, index) => {
          return (
            <PopoverItem key={index} title={item.title}>
              {item.children}
            </PopoverItem>
          );
        })}
      </div>
    </Filters>
  );
};

export default FiltersTable;
