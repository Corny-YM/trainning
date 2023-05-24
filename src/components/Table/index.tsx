import ContentTable from "./ContentTable";
import FiltersTable from "./FiltersTable";

const Table = () => {
  return (
    <>
      <div className="margin-top-16">
        <FiltersTable />
        <ContentTable />
      </div>
    </>
  );
};

export default Table;
