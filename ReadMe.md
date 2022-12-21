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
<Select title="Currency"
        data={["£", "$", "MUR", "€"]}
        search={true}
        closeButton={true}
        searchBoxContainer={{ borderWidth: 0, backgroundColor: '#f5f5f5' }}
        searchTextInputStyle={{ backgroundColor: 'white' }}
        buttonStyle={{ backgroundColor: 'red', borderWidth: 0 }}
        buttonTextStyle={{ color: 'white' }}
/>
```

### Props

