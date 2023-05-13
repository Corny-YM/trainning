import { Frame, TopBar } from "@shopify/polaris";
import TopbarUserMenu from "./Topbar/TopbarUserMenu";
import TopbarSearchField from "./Topbar/TopbarSearchField";
import TopbarSecondaryMenu from "./Topbar/TopbarSecondaryMenu";
import SearchResultActionList from "./Lists/SearchResultActionList";

const logo = {
  width: 124,
  topBarSource:
    "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
  url: "#",
  accessibilityLabel: "Jaded Pixel",
};

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      searchResultsVisible={isSearchActive}
      userMenu={
        <TopbarUserMenu
          isUserMenuOpen={isUserMenuOpen}
          toggleIsUserMenuOpen={toggleIsUserMenuOpen}
        />
      }
      secondaryMenu={
        <TopbarSecondaryMenu
          isSecondaryMenuOpen={isSecondaryMenuOpen}
          toggleIsSecondaryMenuOpen={toggleIsSecondaryMenuOpen}
        />
      }
      searchField={
        <TopbarSearchField
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
        />
      }
      searchResults={<SearchResultActionList />}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  return (
    <div>
      <Frame topBar={topBarMarkup} logo={logo} />
    </div>
  );
};

export default Header;
