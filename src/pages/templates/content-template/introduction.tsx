import { Header } from '../../../ui/header';

type IntroductionProps = {
  title: string;
};

export const Introduction: React.FC<IntroductionProps> = ({ title }) => {
  return (
    <>
      <Header title={title} />
    </>
  );
};
