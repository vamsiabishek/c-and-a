import { Box } from '../box/box';
import { Button } from '../button/button';
import { Input } from '../input/input';

export interface SearchInputProps {
  onChange: (value: string) => void;
  value: string;
  placeHolder?: string;
  onSearch: () => void;
}


export function SearchInput({ onChange, value, placeHolder="Search", onSearch }: SearchInputProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderWidth="sm"
      borderColor="lightgrey"
      borderRadius={30}
      height="fit-content"
    >
       <Input
          onChange={e => onChange(e.target.value)}
          value={value}
          placeholder={placeHolder}
          padding="sm"
          borderRadius={30}
        />
        <Button
          onClick={onSearch}
          padding="sm"
          borderRadius={30}
        >
          <span>Search</span>
        </Button>
    </Box>
  );
}

export default SearchInput;
