import { API_SUFFIX, instance } from './api';

export interface BookResponse {
  title: string;
  author: string;
  image: string;
  publisher: string;
  description: string;
  isbn: string;
}

export interface GetAllBooksResponse {
  display: number;
  items: [BookResponse];
}

export interface SearchBookValue {
  bookName: string;
}

export interface AddClubBookValues {
  cid?: number;
  isbn: string;
}

export interface BookListProps {
  data: {
    items: [BookResponse];
  };
  end: number;
  bid: number;
}

export interface getAllClubsResponse {
  name: string;
  book: [BookListProps];
}

export const getAllBooks = async (): Promise<GetAllBooksResponse> => {
  const { data } = await instance.get(API_SUFFIX.BOOK);
  return data;
};

export const searchBook = async ({ bookName }: SearchBookValue) => {
  const { data } = await instance.post(API_SUFFIX.SEARCH_BOOK, null, {
    params: {
      query: bookName,
    },
  });

  return data;
};

export const addClubBook = async ({ cid, isbn }: AddClubBookValues) => {
  if (cid) {
    console.log(typeof cid, isbn, 'data');
    const { data } = await instance.post(`${API_SUFFIX.CLUB}/${cid}/book`, {
      isbn,
    });
    return data;
  } else {
    console.log(cid, isbn, 'data');
    return;
  }
};

export const getAllClubs = async (): Promise<getAllClubsResponse[]> => {
  const { data } = await instance.get(API_SUFFIX.ALL_CLUBS);
  return data;
};

export const getUserClubs = async (): Promise<getAllClubsResponse[]> => {
  const { data } = await instance.get(API_SUFFIX.CLUB);
  return data;
};
