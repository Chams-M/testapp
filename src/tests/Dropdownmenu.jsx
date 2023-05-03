// import React, { useState } from 'react';
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// const DropdownMenu = () => {

//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <FormControl>
//       <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={selectedOption}
//         onChange={handleOptionChange}
//       >
//         <MenuItem value="option1">Option 1</MenuItem>
//         <MenuItem value="option2">Option 2</MenuItem>
//         <MenuItem value="option3">Option 3</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };

// export default DropdownMenu;



import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, makeStyles, Avatar } from '@mui/material';
import countryData from './countries.json';

const useStyles = makeStyles((theme) => ({
  option: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

const DropdownMenu = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const classes = useStyles();

  return (
    <FormControl>
      <InputLabel id="country-label">Select a country</InputLabel>
      <Select
        labelId="country-label"
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
        renderValue={(selected) => (
          <div className={classes.option}>
            <Avatar
              className={classes.avatar}
              alt={selected}
              src={`https://www.countryflags.io/${countryData.find(
                (country) => country.name === selected
              ).code}/flat/24.png`}
            />
            {selected}
          </div>
        )}
      >
        {countryData.map((country) => (
          <MenuItem key={country.code} value={country.name}>
            <div className={classes.option}>
              <Avatar
                className={classes.avatar}
                alt={country.name}
                src={`https://www.countryflags.io/${country.code}/flat/24.png`}
              />
              {country.name}
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu;
