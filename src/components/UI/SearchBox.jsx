import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBox = (props) => {
  const [inputIsFocused, setInputIsFocused] = useState(props.inputIsFocused);

  return (
    <div className='w-full relative'>
      <input
        onFocus={() => {
          props.setInputIsFocused(true);
          setInputIsFocused(true);
        }}
        onBlur={() => setInputIsFocused(false)}
        type='text'
        placeholder='Search'
        className='w-full outline-none text-text h-[2.9rem] rounded-full border-2 border-input-bg bg-input-bg focus:bg-transparent focus:border-primary py-[6px] px-[40px]'
      />

      <BiSearch
        size={20}
        className={`absolute top-[50%] translate-y-[-50%] left-[15px] ${
          inputIsFocused ? 'text-primary' : 'text-text-meta'
        }`}
      />
    </div>
  );
};

export default SearchBox;
