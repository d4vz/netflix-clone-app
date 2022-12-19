import React from 'react';
import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = ({ isShadow }: { isShadow: boolean }) => {
  const [showSearch, setShowSearch] = React.useState<boolean>(false);

  const [searchValue, setSearchValue] = React.useState<string>('');

  function handleSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <header
      className={`fixed z-50 top-0 right-0 left-0 h-16 flex justify-between items-center px-8
      transition-all duration-500 ease-in
      ${isShadow ? 'bg-primary' : ''}
      `}
    >
      <div className="h-8">
        <a href="/">
          <img
            className="h-full"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="h-9 flex">
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              {showSearch && (
                <input
                  type="text"
                  className="bg-primary text-gray-100 rounded-lg px-2 py-1 focus:outline-none animate-scale-up-hor-right"
                  placeholder="Buscar"
                  onChange={handleSearchValue}
                  value={searchValue}
                />
              )}
            </div>
            <div onClick={() => setShowSearch(!showSearch)}>
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-100 ml-4 hover:scale-110 transition-all duration-200 cursor-pointer  hover:text-gray-400" />
            </div>
          </div>
          <BellAlertIcon className="h-6 ml-4 mr-4 cursor-pointer w-6 text-gray-100 hover:scale-110  transition-all duration-200 hover:text-gray-400" />
        </div>
        <a href="/">
          <img
            className="h-full rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
