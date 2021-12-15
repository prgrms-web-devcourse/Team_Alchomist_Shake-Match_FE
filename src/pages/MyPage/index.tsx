import Carousel from '@compound/Carousel';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import favoriteImageSrc from '@assets/carouselTheme/big/favorites.png';
import editProfileImageSrc from '@assets/carouselTheme/big/editProfile.png';
import { useSearchParams } from 'react-router-dom';
import UserForm from '@domain/UserForm';
import CocktailList from '@domain/CocktailList';
import SectionDividerWithTitle from '@domain/SectionDividerWithTitle';
import SearchBot from '@domain/SearchBot';

const TEN_RADIX = 10;

const MyPage = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIndex = useMemo(
    () => parseInt(searchParams.get('index') || '0', TEN_RADIX),
    [searchParams]
  );
  // 유저 임시정보
  const user = { nickname: 'Alang', age: 15, gender: '남자', mbti: 'INFP' };
  // 칵테일 임시정보
  const cocktails: any[] = [];
  const handleChangeItem = (index: number): void => {
    setSearchParams({ index: index.toString(TEN_RADIX) });
  };

  return (
    <>
      <SectionDividerWithTitle
        dividerOptions={{ size: 1, color: 'LIGHT_GRAY' }}
        showContentsDivider
        withHeader
      >
        <Carousel.Container
          selectedIndex={selectedIndex}
          onChangeItem={handleChangeItem}
        >
          <Carousel.Item
            backgroundColor='LIGHT_PINK'
            imageSrc={favoriteImageSrc}
            title='즐겨찾기 목록'
          />
          <Carousel.Item
            backgroundColor='GREEN'
            imageSrc={editProfileImageSrc}
            title='개인정보 수정'
          />
        </Carousel.Container>
        {selectedIndex === 0 ? (
          <CocktailList cocktailList={cocktails} />
        ) : (
          <UserForm initialValues={user} type='EditProfile' />
        )}
      </SectionDividerWithTitle>
      <SearchBot />
    </>
  );
};

export default MyPage;

/* 필요 컴포넌트
1. Carousel
2. UserForm
3. CockTailList
*/
