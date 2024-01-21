import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

import Chip from './Chip';
import {ChipsType, ChipItem, ChipItemVariant} from '../types';
import {Close, Tick} from '../assets/icons';

interface ChipsProps {
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemLabelStyle?: StyleProp<TextStyle>;
  itemLeadingIconContainerStyle?: StyleProp<ViewStyle>;
  itemTrailingIconContainerStyle?: StyleProp<ViewStyle>;
  items: ChipItem[];
  setItems: React.Dispatch<React.SetStateAction<ChipItem[]>>;
  selectedValues?: string[];
  setSelectedValues?: React.Dispatch<React.SetStateAction<string[]>>;
  type?: ChipsType;
  itemVariant?: ChipItemVariant;
}

const Chips: React.FC<ChipsProps> = props => {
  const {
    containerStyle,
    itemContainerStyle,
    itemLabelStyle,
    itemLeadingIconContainerStyle,
    itemTrailingIconContainerStyle,
    items,
    setItems,
    selectedValues,
    setSelectedValues,
    type = ChipsType.Default,
    itemVariant,
  } = props;

  const onSelectItem = (value: string) => {
    if (type === ChipsType.Filter) {
      if (!selectedValues?.includes(value)) {
        setSelectedValues &&
          setSelectedValues([...(selectedValues || []), value]);
      } else {
        setSelectedValues &&
          setSelectedValues(selectedValues?.filter(item => item !== value));
      }
    } else if (type === ChipsType.Input) {
      setItems(items.filter(item => item.value !== value));
    }
  };

  const renderFilterLeadingIcon = (value: string) => {
    return selectedValues?.includes(value) ? <Tick /> : null;
  };

  const renderInputTrailingIcon = (value: string) => {
    return (
      <TouchableOpacity onPress={() => onSelectItem(value)}>
        <Close />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {items.map((item, index) => (
        <Chip
          variant={itemVariant}
          key={`${item.value}-${index}`}
          style={itemContainerStyle}
          labelStyle={itemLabelStyle}
          leadingIconContainerStyle={itemLeadingIconContainerStyle}
          trailingIconContainerStyle={itemTrailingIconContainerStyle}
          label={item.label}
          leadingIcon={
            type === ChipsType.Filter
              ? () => renderFilterLeadingIcon(item.value)
              : undefined
          }
          trailingIcon={
            type === ChipsType.Input
              ? () => renderInputTrailingIcon(item.value)
              : undefined
          }
          onPress={
            type === ChipsType.Filter || type === ChipsType.Input
              ? () => onSelectItem(item.value)
              : undefined
          }
        />
      ))}
    </View>
  );
};

export default Chips;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
});
