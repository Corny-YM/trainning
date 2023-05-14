import {
  AlphaCard,
  ContextualSaveBar,
  FormLayout,
  Frame,
  Layout,
  Page,
  TextField,
} from "@shopify/polaris";
import { logoContextualSave } from "./Logo";

const Account = () => {
  const defaultValue = useRef({
    name: "Nguyễn Thế Anh",
    email: "vietcong1508@gmail.com",
  });

  const [isDirty, setIsDirty] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultValue.current.name
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultValue.current.email
  );

  const handleNameFieldChange = useCallback((str: string) => {
    setNameFieldValue(str);
    str && setIsDirty(true);
  }, []);

  const handleEmailFieldChange = useCallback((str: string) => {
    setEmailFieldValue(str);
    str && setIsDirty(true);
  }, []);

  const handleSave = useCallback(() => {
    defaultValue.current.name = nameFieldValue;
    defaultValue.current.email = emailFieldValue;
    setIsDirty(false);
  }, [emailFieldValue, nameFieldValue]);

  const handleDiscard = useCallback(() => {
    setNameFieldValue(defaultValue.current.name);
    setEmailFieldValue(defaultValue.current.email);
    setIsDirty(false);
  }, []);

  return (
    <>
      <Page title="Account">
        <Layout>
          <Layout.AnnotatedSection
            title="Account details"
            description="Jaded Pixel will use this as your account information."
          >
            <AlphaCard>
              <FormLayout>
                <TextField
                  label="Full name"
                  value={nameFieldValue}
                  onChange={handleNameFieldChange}
                  autoComplete="name"
                />
                <TextField
                  type="email"
                  label="Email"
                  value={emailFieldValue}
                  onChange={handleEmailFieldChange}
                  autoComplete="email"
                />
              </FormLayout>
            </AlphaCard>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
      {isDirty && (
        <Frame logo={logoContextualSave}>
          <ContextualSaveBar
            
            message="Unsaved changes"
            saveAction={{
              content: "Save",
              onAction: handleSave,
            }}
            discardAction={{
              content: "Discard",
              onAction: handleDiscard,
            }}
          />
        </Frame>
      )}
    </>
  );
};

export default Account;
