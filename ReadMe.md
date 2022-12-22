# React Native Select dropdown 

rn-select-dropdown is a customized select menu for react native that works for android and ios platforms.

## Installation

#### # Using npm

```bash
npm i @mamodesaebsaad/rn-select-dropdown
```

## Usage

```
import Select from "@mamodesaebsaad/rn-select-dropdown";
...
const [value, setValue] = React.useState();
...
<Select title="Currency"
        data={["£", "$", "MUR", "€"]}
        value={value}
        onChangeValue={setValue}
        search={true}
        closeButton={true}
        searchBoxContainer={{ borderWidth: 0, backgroundColor: '#f5f5f5' }}
        searchTextInputStyle={{ backgroundColor: 'white' }}
        buttonStyle={{ backgroundColor: 'red', borderWidth: 0 }}
        buttonTextStyle={{ color: 'white' }}
/>
```

### Props

