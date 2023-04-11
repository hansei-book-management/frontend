import { Section } from '@/components';
import { rows } from '@/constant';

import * as S from './styled';

export const Manage: React.FC = () => {
  return (
    <S.ManagePageContainer>
      <S.ManagePageSubTitle>앙기모링님은 현재 2권 대출중이에요.</S.ManagePageSubTitle>
      <S.ManagePageTitle>대출 중인 도서</S.ManagePageTitle>
      <Section image={rows} />
    </S.ManagePageContainer>
  );
};
