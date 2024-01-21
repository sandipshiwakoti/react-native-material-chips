import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { ChipItemVariant } from "../types";

interface ChipProps {
  variant?: ChipItemVariant;
  label: string;
  onPress?: () => void;
  leadingIcon?: () => React.ReactElement | null;
  trailingIcon?: () => React.ReactElement | null;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  leadingIconContainerStyle?: StyleProp<ViewStyle>;
  trailingIconContainerStyle?: StyleProp<ViewStyle>;
}

const Chip: React.FC<ChipProps> = (props) => {
  const {
    variant,
    label,
    onPress,
    leadingIcon,
    trailingIcon,
    style,
    labelStyle,
    leadingIconContainerStyle,
    trailingIconContainerStyle,
  } = props;

  const styles = makeStyles(variant);

  return (
    <View pointerEvents={variant === "disabled" ? "none" : undefined}>
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        {leadingIcon && (
          <View
            style={[styles.leadingIconContainer, leadingIconContainerStyle]}
          >
            {leadingIcon()}
          </View>
        )}

        <Text style={(styles.labelText, labelStyle)}>{label}</Text>

        {trailingIcon && (
          <View
            style={[styles.trailingIconContainer, trailingIconContainerStyle]}
          >
            {trailingIcon()}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const makeStyles = (variant: ChipItemVariant | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 10,
      backgroundColor: variant === "outlined" ? "white" : "#9bedff",
      overflow: "hidden",
      alignItems: "center",
      borderWidth: variant === "outlined" ? 2 : 0,
      borderColor: variant === "outlined" ? "#87CEEB" : undefined,
      opacity: variant === "disabled" ? 0.5 : 1,
    },
    labelText: {
      color: "#442C2E",
      fontWeight: "500",
      fontSize: 14,
    },
    leadingIconContainer: {
      marginRight: 5,
    },
    trailingIconContainer: {
      marginLeft: 5,
    },
  });

export default Chip;
