import {
  AlphaTabProps,
  ChoiceList,
  IndexFilters,
  IndexFiltersMode,
  IndexFiltersProps,
  IndexTable,
  RangeSlider,
  TextField,
  useSetIndexFiltersMode,
} from "@shopify/polaris";
import { AlphaTabAction } from "@shopify/polaris/build/ts/latest/src/components/AlphaTabs";

const FilterNav = () => {
  const [queryValue, setQueryValue] = useState("");
  const [sortSelected, setSortSelected] = useState(["order asc"]);
  const [selected, setSelected] = useState(0);
  const [itemStrings, setItemStrings] = useState([
    "All",
    "Unpaid",
    "Open",
    "Closed",
    "Local delivery",
    "Local pickup",
  ]);

  const { mode, setMode } = useSetIndexFiltersMode(IndexFiltersMode.Filtering);

  const [accountStatus, setAccountStatus] = useState<string[]>([]);
  const [taggedWith, setTaggedWith] = useState<string | undefined>("");
  const [moneySpent, setMoneySpent] = useState<[number, number] | undefined>(
    undefined
  );

  const handleAccountStatusChange = useCallback(
    (value: string[]) => setAccountStatus(value),
    []
  );
  const handleTaggedWithChange = useCallback(
    (value: string) => setTaggedWith(value),
    []
  );
  const handleMoneySpentChange = useCallback(
    (value: [number, number]) => setMoneySpent(value),
    []
  );

  const filters = [
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
          selected={accountStatus || []}
          onChange={handleAccountStatusChange}
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
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
    {
      key: "moneySpent",
      label: "Money spent",
      filter: (
        <RangeSlider
          label="Money spent is between"
          labelHidden
          value={moneySpent || [0, 500]}
          prefix="$"
          output
          min={0}
          max={2000}
          step={1}
          onChange={handleMoneySpentChange}
        />
      ),
    },
  ];

  const sortOptions: IndexFiltersProps["sortOptions"] = [
    { label: "Order", value: "order asc", directionLabel: "Ascending" },
    { label: "Order", value: "order desc", directionLabel: "Descending" },
    { label: "Customer", value: "customer asc", directionLabel: "A-Z" },
    { label: "Customer", value: "customer desc", directionLabel: "Z-A" },
    { label: "Date", value: "date asc", directionLabel: "A-Z" },
    { label: "Date", value: "date desc", directionLabel: "Z-A" },
    { label: "Total", value: "total asc", directionLabel: "Ascending" },
    { label: "Total", value: "total desc", directionLabel: "Descending" },
  ];

  const onCreateNewView = async (value: string) => {
    setItemStrings([...itemStrings, value]);
    setSelected(itemStrings.length);
    return true;
  };
  const onHandleSave = async () => {
    return true;
  };
  const primaryAction: IndexFiltersProps["primaryAction"] =
    selected === 0
      ? {
          type: "save-as",
          onAction: onCreateNewView,
          disabled: false,
          loading: false,
        }
      : {
          type: "save",
          onAction: onHandleSave,
          disabled: false,
          loading: false,
        };

  const handleQueryValueChange = useCallback((value: string) => {
    setQueryValue(value);
  }, []);

  const handleClearQueryValue = useCallback(() => setQueryValue(""), []);

  const onHandleCancel = () => {
    console.log("Cancel Action");
  };

  const duplicateView = async (name: string) => {
    setItemStrings([...itemStrings, name]);
    setSelected(itemStrings.length);
    return true;
  };
  const deleteView = (index: number) => {
    const newItemStrings = [...itemStrings];
    newItemStrings.splice(index, 1);
    setItemStrings(newItemStrings);
    setSelected(0);
  };
  const tabs: AlphaTabProps[] = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => {
      console.log("Tabs Action");
    },
    id: `${item}-${index}`,
    isLocked: index === 0,
    actions:
      index === 0
        ? []
        : [
            {
              type: "rename" as AlphaTabAction,
              content: "Rename view",
              onAction: () => {},
              onPrimaryAction: async (value: string): Promise<boolean> => {
                const newItemsStrings = tabs.map((item, idx) => {
                  if (idx === index) {
                    return value;
                  }
                  return item.content;
                });
                setItemStrings(newItemsStrings);
                return true;
              },
            },
            {
              content: "Duplicate view",
              type: "duplicate" as AlphaTabAction,
              onPrimaryAction: async (value: string): Promise<boolean> => {
                duplicateView(value);
                return true;
              },
            },
            {
              content: "Edit view",
              type: "edit" as AlphaTabAction,
            },
            {
              content: "Delete view",
              type: "delete" as AlphaTabAction,
              onPrimaryAction: async () => {
                deleteView(index);
                return true;
              },
            },
          ],
  }));

  return (
    <IndexFilters
      sortOptions={sortOptions}
      sortSelected={sortSelected}
      queryValue={queryValue}
      queryPlaceholder="Searching in all"
      onQueryChange={handleQueryValueChange}
      onQueryClear={() => handleClearQueryValue()}
      onSort={setSortSelected}
      primaryAction={primaryAction}
      cancelAction={{
        onAction: onHandleCancel,
        disabled: false,
        loading: false,
      }}
      tabs={tabs}
      selected={selected}
      onSelect={setSelected}
      canCreateNewView
      onCreateNewView={onCreateNewView}
      filters={filters}
      appliedFilters={[]}
      onClearAll={() => {
        console.log("On Clear All");
      }}
      mode={mode}
      setMode={setMode}
    />
  );
};

export default FilterNav;
