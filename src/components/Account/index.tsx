import { Layout, Loading, Page } from "@shopify/polaris";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAnAccount } from "@/apiCalls";

import NavSection from "./NavSection";
import SectionUpdateAccount from "./SectionUpdateAccount";
import SectionAccount from "./SectionAccount";

const Account = ({ isUpdate = false }: any) => {
  const { id }: any = useParams();

  // TanStack
  const accountQuery = useQuery({
    queryKey: ["account"],
    queryFn: () => getAnAccount(id),
    enabled: isUpdate,
    initialData: [],
  });

  return (
    <>
      {isUpdate && accountQuery.isFetching && <Loading />}
      <Page>
        <Layout>
          <Layout.Section>
            <NavSection
              title={
                isUpdate ? accountQuery.data?.email : "Create a new account"
              }
              isUpdate={isUpdate}
            />
          </Layout.Section>
          {isUpdate ? (
            <SectionUpdateAccount
              idAccount={id}
              name={accountQuery.data?.name || ""}
              phone={accountQuery.data?.phone || ""}
              role={accountQuery.data?.role || ""}
            />
          ) : (
            <SectionAccount />
          )}
        </Layout>
      </Page>
    </>
  );
};

export default Account;
