import { getAccounts } from "@/apiCalls";
import { Page, LegacyCard, DataTable, Link } from "@shopify/polaris";
import moment from "moment";

const DashBoard = () => {
  const [accounts, setAccounts] = useState([]);
  const [cols, setCols] = useState([
    "Thông tin",
    "Email",
    "Số điện thoại",
    "Ngày tạo",
  ]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        // [{}, {}, ...]
        const res_accounts = await getAccounts();
        setAccounts(convertArray(res_accounts));
      } catch (err) {
        console.log(err);
      }
    };
    fetchAccounts();
  }, []);

  const convertArray = (arr: any) => {
    const newArr = arr.map((value: any) => {
      return [
        <Link removeUnderline key={value.id}>
          {value.name}
        </Link>,
        value.email,
        value.phone,
        moment(value.created_at).format("DD/MM/Y HH:mm:ss"),
      ];
    });
    return newArr;
  };

  return (
    <Page title="Quản lý tài khoản">
      <LegacyCard>
        <DataTable
          columnContentTypes={["text", "text", "text", "text"]}
          headings={cols}
          rows={accounts}
        />
      </LegacyCard>
    </Page>
  );
};

export default DashBoard;
