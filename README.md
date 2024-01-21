# react-native-material-chips

🔥Easily implement versatile and customizable chips inspired from material design🔥

## Features

- Supports chip types: default, filter, and input
- Provides chip variants: solid, outlined, and disabled for diverse visual styles.
- Easy customization for appearance and behavior

## Installation

```sh
$ yarn add react-native-material-chips
```

## Props
Here's a props table for both `Chip` and `Chips` components:

### `Chip` Component

| Prop                             | Type                                     | Description                                                         |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| `variant`                         | `ChipItemVariant` (Optional)             | Chip style variant: `'outlined'` or `'default'`. Default is `'default'`. |
| `label`                           | `string`                                 | The text content of the chip.                                       |
| `onPress`                         | `() => void` (Optional)                  | Callback function invoked when the chip is pressed.                 |
| `leadingIcon`                     | `() => React.ReactElement \| null` (Optional) | Custom function returning a React element for the leading icon.      |
| `trailingIcon`                    | `() => React.ReactElement \| null` (Optional) | Custom function returning a React element for the trailing icon.     |
| `style`                           | `StyleProp<ViewStyle>` (Optional)        | Custom style for the entire chip container.                         |
| `labelStyle`                      | `StyleProp<TextStyle>` (Optional)        | Custom style for the chip label text.                                |
| `leadingIconContainerStyle`       | `StyleProp<ViewStyle>` (Optional)        | Custom style for the leading icon container.                         |
| `trailingIconContainerStyle`      | `StyleProp<ViewStyle>` (Optional)        | Custom style for the trailing icon container.                        |

### `Chips` Component

| Prop                             | Type                                     | Description                                                         |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| `containerStyle`                  | `StyleProp<ViewStyle>` (Optional)        | Custom style for the entire chips container.                        |
| `itemContainerStyle`              | `StyleProp<ViewStyle>` (Optional)        | Custom style for each chip item container.                          |
| `itemLabelStyle`                  | `StyleProp<TextStyle>` (Optional)        | Custom style for the chip item label text.                          |
| `itemLeadingIconContainerStyle`   | `StyleProp<ViewStyle>` (Optional)        | Custom style for the leading icon container within each chip item.  |
| `itemTrailingIconContainerStyle`  | `StyleProp<ViewStyle>` (Optional)        | Custom style for the trailing icon container within each chip item. |
| `items`                           | `ChipItem[]`                             | An array of chip items.                                             |
| `setItems`                        | `React.Dispatch<React.SetStateAction<ChipItem[]>>` | State setter function for updating chip items.                |
| `selectedValues`                  | `string[]` (Optional)                   | An array of selected values (for Filter chips).                     |
| `setSelectedValues`               | `React.Dispatch<React.SetStateAction<string[]>>` (Optional) | State setter function for updating selected values.    |
| `type`                            | `ChipsType` (Optional)                   | Type of chips: `'default'`, `'filter'`, or `'input'`. Default is `'default'`. |
| `itemVariant`                     | `ChipItemVariant` (Optional)             | Variant for chip items: `'outlined'` or `'default'`. Default is `'default'`. |



## License

react-native-material-chips is [MIT licensed](https://github.com/sandipshiwakoti/react-native-material-chips/blob/master/LICENSE) .