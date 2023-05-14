import {
  AlphaCard,
  Layout,
  Loading,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  VerticalStack,
} from "@shopify/polaris";

const Orders = () => {
  return (
    <>
      <Loading />
      <SkeletonPage>
        <Layout>
          <Layout.Section>
            <AlphaCard>
              <VerticalStack gap="4">
                <SkeletonDisplayText size="small" />
                <div>
                  <SkeletonBodyText lines={9} />
                </div>
              </VerticalStack>
            </AlphaCard>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    </>
  );
};

export default Orders;
