# React Native Select dropdown 

rn-select-dropdown is a customized select menu for react native that works for android and ios platforms.

<p float="left">
  <img src="https://media.giphy.com/media/aWVSw8HD3N0QWeEuyC/giphy.gif" width="270">
  <img src="https://i.imgur.com/ljncNKV.jpeg" width="270">
</p>

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

- [`data`](#data)
- [`value`](#value)
- [`onChangeValue`](#onChangeValue)
- [`search`](#search)
- [`closeButton`](#closeButton)
- [`searchBoxContainer`](#searchBoxContainer)
- [`searchTextInputStyle`](#searchTextInputStyle)
- [`buttonStyle`](#buttonStyle)
- [`buttonTextStyle`](#buttonTextStyle)

---

### data

array of data that will be represented in dropdown

| Type  | Required |
| ----  | -------- |
| array | Yes      |

---

### value

value of the selected option

| Type   | Required |
| ----   | -------- |
| string | Yes      |

---

### onChangeValue

Method onChange 

| Type            | Required |
| ----            | -------- |
| Hook (useState) | Yes      |

---

### search

Enable/Disable Search in the dropdown 

| Type    | Required |
| ----    | -------- |
| boolean | Yes      |

---

### closeButton

Enable/Disable close button in the dropdown 

| Type    | Required |
| ----    | -------- |
| boolean | Yes      |

---

### searchBoxContainer

Styling of the SearchBox Container 

| Type    | Required |
| ----    | -------- |
| object  | No      |

---

### searchTextInputStyle

Styling of the SearchBox Input style 

| Type    | Required |
| ----    | -------- |
| object  | No      |

---

### buttonStyle

Styling of the close button style in the dropdown 

| Type    | Required |
| ----    | -------- |
| object  | No      |

---

### buttonTextStyle

Styling of the close button text style in the dropdown 

| Type    | Required |
| ----    | -------- |
| object  | No      |

---

