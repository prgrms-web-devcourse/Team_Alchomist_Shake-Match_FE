import { COLOR } from '@constants';
import { HEADER_HEIGHT } from '@constants/headerHeight';
import styled from '@emotion/styled';

const StyledHeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid ${COLOR.LIGHT_GRAY};
  padding-right: 10px;
  align-items: center;
  height: ${HEADER_HEIGHT};
  column-gap: 10px;

  & > *:first-child {
    margin-right: auto;
  }
`;

export { StyledHeaderContainer };
