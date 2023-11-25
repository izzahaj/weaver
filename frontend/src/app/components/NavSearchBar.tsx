'use client';

import { Box, BoxProps, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, List, ListItem } from "@chakra-ui/react";
import React, { ChangeEvent, RefObject, useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import useOnBlur from "../hooks/useOnBlur";

// TODO: implement autocomplete and allow arrow key navigation of suggestions
const suggestions = [
  {
    id: 1,
    result: 'first item',
  },
  {
    id: 2,
    result: 'second item',
  },
  {
    id: 3,
    result: 'an extremely long third item to be searched to test the box',
  },
  {
    id: 4,
    result: 'fourth item',
  },
];

const NavSearchBar: React.FC<BoxProps> = (props) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const searchRef: RefObject<HTMLInputElement> = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const showClearButton = searchInput.length > 0 && isFocused;
  const showSuggestions = suggestions.length > 0 && isFocused;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClear = () => {
    setSearchInput('');
    inputRef.current?.focus();
  };

  useOnClickOutside(searchRef, handleBlur);
  useOnBlur(searchRef, handleBlur);

  return (
    <Box
      {...props}
      borderRadius={showSuggestions ? '4px 4px 0 0' : 15}
      position={'relative'}
      w={'100%'}
      bgColor={'ivory.50'}
      shadow='0px 1px 1px 0px black'
    >
      <InputGroup ref={searchRef} alignItems={'center'} size={'sm'} color={'maroon.800'}>
        <InputLeftElement rounded={15}>
          <IconButton
            size='xs'
            variant='ghost'
            aria-label='Search'
            icon={<Icon as={FaMagnifyingGlass} boxSize={4} />}
            rounded={15}
            colorScheme="maroon"
            _hover={{ color: 'maroon.600' }}
          />
        </InputLeftElement>
        <Input
          ref={inputRef}
          focusBorderColor="maroon.600"
          onFocus={handleFocus}
          placeholder="Search"
          rounded={showSuggestions ? 4 : 15}
          bgColor={'ivory.50'}
          value={searchInput}
          onChange={handleChange}
        />
        { showClearButton && (
          <InputRightElement>
            <IconButton
              size='xs'
              variant='ghost'
              aria-label='Clear Search input'
              icon={<Icon as={FaXmark} boxSize={4} />}
              rounded={15}
              colorScheme="maroon"
              onClick={handleClear}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {showSuggestions && (
        <Box
          shadow='0 1px 1px 0 black'
          borderRadius={'0 0 4px 4px'}
          position='absolute'
          bgColor='ivory.50'
          color='maroon.800'
          w='100%'
          fontSize='sm'
          py={1}
          whiteSpace='nowrap'
        >
          <List>
            {suggestions.map((result) => (
              <ListItem key={result.id}
                pl={8}
                py={1}
                pr={2}
                overflow='hidden'
                textOverflow='ellipsis'
                _hover={{ bgColor: 'ivory.100' }}
              >
                {result.result}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default NavSearchBar;
