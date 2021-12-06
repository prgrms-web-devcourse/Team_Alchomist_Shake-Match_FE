import useToggle from '@hooks/useToggle';
import type { ReactElement } from 'react';
import { StyledToggleContainer, StyledToggleInput } from './styled';
import { TEXT_TOGGLE } from './types';
import type { TextToggleProps } from './types';
import Text from '@base/Text';

const TextToggle = ({
  children,
  block = false,
  name,
  on = false,
  toggleType = 'ingredient',
  onChange
}: TextToggleProps): ReactElement => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (): void => {
    toggle();
    onChange();
  };

  return (
    <StyledToggleContainer block={block} toggled={checked}>
      <StyledToggleInput
        checked={checked}
        name={name}
        type='checkbox'
        onChange={handleChange}
      />
      <Text
        color={checked ? 'BASIC_WHITE' : 'BLACK'}
        {...TEXT_TOGGLE[toggleType].textProps}
      >
        {children}
      </Text>
    </StyledToggleContainer>
  );
};

export default TextToggle;
