import { MainLayout } from "@/common/layout/public";
import { InfoComponent } from "@/modules/info";

const InfoPage = () => <InfoComponent />;

InfoPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default InfoPage;
