import React, { useState, ChangeEvent } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import debounce from 'lodash.debounce';

type SearchInputProps = {
  onSearch: (query: string) => void;
  label: string; 
  width?: string;
} & TextFieldProps

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, width, label, ...textFieldProps }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearch = debounce(onSearch, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={searchTerm}
      sx={{
        width: width || '40%',
        '.MuiInputBase-root': {
          borderRadius: '15px'
        }
       }}
      onChange={handleChange}
      fullWidth
      margin="normal"
      {...textFieldProps}
    />
  );
};

export default SearchInput;
