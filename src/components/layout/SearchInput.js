import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import useDebounce from '../../utils/UseDebounce';
import { getSearhItems, setLoading,getAllSearch } from '../../actions/SearchActions';
import { useDispatch } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60ch',
      '&:focus': {
        width: '80ch',
      },
    },
  },
}));

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        dispatch(setLoading(true));
        //INFO: esto es un test para ver la carga nada mas quitar
        setTimeout(() => {
          dispatch(getSearhItems(debouncedSearchTerm));
        }, 3000);
      } else {
        dispatch(getAllSearch());

      }
    },
    [debouncedSearchTerm, dispatch]
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Buscar Movies"
        value={searchTerm}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => { setSearchTerm(e.target.value.replace(/[^\w\s]/gi, "")) }}
      />
    </Search>
  )
}

export default SearchInput;
