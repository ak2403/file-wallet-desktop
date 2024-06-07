import { ContentTemplate } from '../templates/content-template';
import { Wrapper, Content } from './transfer-page.styles';

import { DragDrop } from '../../components/drag-drop';

export const TransferPage = () => {
  return (
    <ContentTemplate title="Tranfer files">
      <Wrapper>
        <Content>
          <DragDrop />
        </Content>
      </Wrapper>
    </ContentTemplate>
  );
};
