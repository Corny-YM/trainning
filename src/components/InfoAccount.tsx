import {
  AlphaCard,
  Button,
  FormLayout,
  HorizontalGrid,
  Icon,
  Layout,
  Page,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";

const InfoAccount = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <div className="display-flex justify-content-space-between">
            <div className="display-flex align-items-center">
              <div className="margin-right-16">
                <Button icon={ArrowLeftMinor}></Button>
              </div>
              <Text variant="headingLg" as="h3" fontWeight="bold">
                vietcong1508@gmail.com
              </Text>
            </div>

            <div>
              <Button destructive>Delete account</Button>
            </div>
          </div>
        </Layout.Section>
        <Layout.Section>
          <AlphaCard>
            <FormLayout>
              <TextField label="Name" onChange={() => {}} autoComplete="off" />
              <TextField
                type="text"
                label="Phone"
                onChange={() => {}}
                autoComplete="off"
              />
              <Select
                label="Date range"
                options={[]}
                onChange={() => {}}
                value={'null'}
              />
            </FormLayout>
          </AlphaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default InfoAccount;
