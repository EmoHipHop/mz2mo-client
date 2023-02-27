import Navigation from '@/components/common/navigation/navigation';
import WebPlayers from '@/components/common/web-players/WebPlayers';

import * as style from './MainTemplates.style';

type MainTemplatesProps = {
  children: React.ReactNode;
};

const MainTemplates = ({ children }: MainTemplatesProps) => {
  return (
    <style.Wrapper>
      <Navigation />
      <div className="content">{children}</div>
      <WebPlayers />
    </style.Wrapper>
  );
};

export default MainTemplates;
