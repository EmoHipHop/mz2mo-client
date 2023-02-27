import Navigation from '@/components/common/navigation/navigation';
import WebPlayers from '@/components/common/web-players/WebPlayers';

import * as style from './BaseTemplates.style';

type BaseTemplatesProps = {
  children: React.ReactNode;
};

const BaseTemplates = ({ children }: BaseTemplatesProps) => {
  return (
    <style.Wrapper>
      <Navigation />
      <div className="content">{children}</div>
      <WebPlayers />
    </style.Wrapper>
  );
};

export default BaseTemplates;
