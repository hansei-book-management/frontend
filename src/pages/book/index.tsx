import React from 'react';
import { useParams } from 'react-router-dom';

import { DetailModal, HeaderSection, Section } from '@/components';
import { useGetClubs, useModal } from '@/hooks';

import * as S from './styled';

export const BookPage: React.FC = () => {
  const { data } = useGetClubs();
  const clubs = data?.result;

  const { clubId } = useParams<{ clubId: string }>();
  const activeClub = clubs?.find(({ name }) => name === clubId);

  const { modalActive } = useModal();

  const activeClubBooks = activeClub?.book;

  return (
    <S.BookPageContainer>
      <HeaderSection
        name={activeClub?.name}
        activeId={clubId}
        href="/book"
        list={clubs || []}
        notShowPlusIcon={true}
      />
      <h1>{clubs?.map(({ name }) => name)}</h1>
      {activeClubBooks && <Section data={activeClubBooks} />}
      {modalActive && <DetailModal leftButtonText="닫기" />}
    </S.BookPageContainer>
  );
};
