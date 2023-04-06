import { useEffect } from 'react';

import i18n from 'i18next';
import { useSearchParams } from 'react-router-dom';
import { FaGlobeAsia, FaGlobeAmericas } from 'react-icons/fa';

import {
  Icon,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const i18nList = [
  {
    id: 'zh-TW',
    name: '繁體中文',
    icon: FaGlobeAsia,
  },
  {
    id: 'en',
    name: 'English',
    icon: FaGlobeAmericas,
  },
];

const LanguageSwitch = () => {
  const currentLanguage = i18n.language;
  const [searchParams, setSearchParams] = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isZhTW = currentLanguage === 'zh-TW';

  const params = [];

  searchParams.forEach((value, key) => {
    params.push([key, value]);
  });

  useEffect(() => {
    if (params[0]) {
      setSearchParams({ local: params[0] ? params[0][1] : '' });
      i18n.changeLanguage(params[0][1]);
      localStorage.setItem('language', params[0][1]);
      console.log('hu', params[0][1]);
    }
  }, []);

  const handleChangeLanguage = lngId => {
    i18n.changeLanguage(lngId);
    localStorage.setItem('language', lngId);
    setSearchParams({ local: lngId });
  };

  const handleClick = lngId => {
    handleChangeLanguage(lngId);
    onClose();
  };

  return (
    <Menu
      isOpen={isOpen}
      w="unset"
      px="20px"
      position="relative"
      direction="column"
      role="group"
    >
      <MenuButton color="grey.700" onMouseEnter={onOpen}>
        <HStack color="grey.700">
          <Icon as={isZhTW ? i18nList[0].icon : i18nList[1].icon} />
          <Text>{isZhTW ? i18nList[0].name : i18nList[1].name}</Text>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minW="120px"
        position="absolute"
        top="0px"
        bgColor="whiteAlpha.700"
        textStyle="text0"
        transition="all .25s"
        backdropFilter="blur(5px)"
        py="0"
      >
        {i18nList.map(item => (
          <MenuItem
            key={item.id}
            _hover={{ bgColor: 'whiteAlpha.900', color: 'blue.800' }}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitch;
