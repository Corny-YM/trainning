import { Frame, TopBar } from "@shopify/polaris";
import TopbarUserMenu from "./Topbar/TopbarUserMenu";
import TopbarSearchField from "./Topbar/TopbarSearchField";
import TopbarSecondaryMenu from "./Topbar/TopbarSecondaryMenu";
import SearchResultActionList from "./Lists/SearchResultActionList";



const Header = () => {
  console.log('re-render HEADER');
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

  return (
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
};

export default Header;
