import { loginCall } from "@/apiCalls";
import { AuthContext } from "@/context/AuthContext";
import {
  AlphaCard,
  Button,
  FormLayout,
  Layout,
  Page,
  Spinner,
  TextField,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailFieldValue, setEmailFieldValue] = useState("");
  const [passwordFieldValue, setPasswordFieldValue] = useState("");

  const navigate = useNavigate();
  const { isFetching, dispatch }: any = useContext(AuthContext);

  const handleEmailFieldChange = useCallback((str: string) => {
    setEmailFieldValue(str);
  }, []);
  const handlePasswordFieldChange = useCallback((str: string) => {
    setPasswordFieldValue(str);
  }, []);

  const handleLogin = async () => {
    loginCall(
      {
        email: emailFieldValue,
        password: passwordFieldValue,
      },
      dispatch
    );
    navigate("/");
  };

  return (
    <Page title="Login">
      <Layout>
        <Layout.AnnotatedSection
          title="Login details"
          description="Jaded Pixel will use this as your account information."
        >
          <AlphaCard>
            <FormLayout>
              <TextField
                label="Email"
                value={emailFieldValue}
                onChange={handleEmailFieldChange}
                autoComplete="off"
              />
              <TextField
                type="password"
                label="Password"
                value={passwordFieldValue}
                onChange={handlePasswordFieldChange}
                autoComplete="off"
              />
              <div className="w-100 center-end">
                {!isFetching ? (
                  <Button onClick={handleLogin} primary>
                    Login
                  </Button>
                ) : (
                  <Spinner accessibilityLabel="Spinner example" size="large" />
                )}
              </div>
            </FormLayout>
          </AlphaCard>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default Login;
