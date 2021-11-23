import React, { useEffect, useMemo, useRef } from "react";
import { Animated, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { PaletteColor, usePalette, useStyleSheet } from "./base";
import Surface, { SurfaceProps } from "./Surface";
import Pressable, { PressableProps } from "./Pressable";
import Text from "./Text";
import ActivityIndicator from "./ActivityIndicator";

export interface FABProps extends Omit<SurfaceProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  icon?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  label?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  variant?: "standard" | "extended";

  size?: "default" | "mini";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  loading?: boolean;

  loadingIndicator?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  loadingIndicatorPosition?: "icon" | "overlay";

  visible?: boolean;

  pressableContainerStyle?: StyleProp<ViewStyle>;

  contentContainerStyle?: PressableProps["style"];

  iconContainerStyle?: StyleProp<ViewStyle>;

  labelContainerStyle?: StyleProp<ViewStyle>;

  labelStyle?: StyleProp<TextStyle>;

  loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}

const FAB: React.FC<FABProps> = ({
  icon,
  label,
  variant = "standard",
  size = "default",
  color = "secondary",
  tintColor,
  loading = false,
  loadingIndicator,
  loadingIndicatorPosition = "icon",
  visible = true,
  style,
  pressableContainerStyle,
  contentContainerStyle,
  iconContainerStyle,
  labelContainerStyle,
  labelStyle,
  loadingOverlayContainerStyle,
  effect,
  effectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  ...rest
}) => {
  const palette = usePalette(color, tintColor);

  const hasIcon = useMemo(() => icon || (loading && loadingIndicatorPosition === "icon"), [icon, loading, loadingIndicatorPosition]);

  const styles = useStyleSheet(() => ({
    container: {
      backgroundColor: palette.color,
      borderRadius: size === "default" ? 28 : 20,
    },
    pressableContainer: {
      borderRadius: size === "default" ? 28 : 20,
      overflow: "hidden",
    },
    pressable: {
      flexDirection: "row",
      alignItems: "center",
      paddingStart: variant === "extended" ? (hasIcon ? (size === "default" ? 12 : 6) : size === "default" ? 20 : 10) : size === "default" ? 16 : 8,
      paddingEnd: variant === "extended" ? (size === "default" ? 20 : 10) : size === "default" ? 16 : 8,
      paddingVertical: size === "default" ? 16 : 8,
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: 24,
      height: 24,
    },
    labelContainer: {
      marginStart: hasIcon ? (size === "default" ? 12 : 6) : 0,
    },
    loadingOverlayContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: palette.color,
    },
  }), [variant, size, palette, hasIcon]);

  const animated = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const getLoadingIndicator = () => {
    if (!loadingIndicator) return <ActivityIndicator color={palette.tintColor} />;
    switch (typeof loadingIndicator) {
      case "string":
        return (
          <Text variant="button" style={{ color: palette.tintColor }}>
            {loadingIndicator}
          </Text>
        );
      case "function":
        return loadingIndicator({ color: palette.tintColor });
      default:
        return loadingIndicator;
    }
  };

  const getIcon = () => {
    if (loading && loadingIndicatorPosition === "icon") return getLoadingIndicator();
    return typeof icon === "function" ? icon({ color: palette.tintColor, size: 24 }) : icon;
  };

  const getLabel = () => {
    switch (typeof label) {
      case "string":
        return (
          <Text variant="button" style={[{ color: palette.tintColor }, labelStyle]}>
            {label}
          </Text>
        );
      case "function":
        return label({ color: palette.tintColor });
      default:
        return label;
    }
  };

  return (
    <Surface elevation={8} style={[styles.container, { transform: [{ scale: animated }] }, style]} {...rest}>
      <View style={[styles.pressableContainer, pressableContainerStyle]}>
        <Pressable
          style={[styles.pressable, contentContainerStyle]}
          effect={effect}
          effectColor={effectColor ?? palette.tintColor}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          onBlur={onBlur}
          onFocus={onFocus}
          delayLongPress={delayLongPress}
          disabled={disabled}
          hitSlop={hitSlop}
          pressRetentionOffset={pressRetentionOffset}
          android_disableSound={android_disableSound}
          android_ripple={android_ripple}
          testOnly_pressed={testOnly_pressed}
        >
          {hasIcon && <View style={[styles.iconContainer, iconContainerStyle]}>{getIcon()}</View>}
          {variant === "extended" && <View style={[styles.labelContainer, labelContainerStyle]}>{getLabel()}</View>}

          {loading && loadingIndicatorPosition === "overlay" && (
            <View style={[styles.loadingOverlayContainer, loadingOverlayContainerStyle]}>{getLoadingIndicator()}</View>
          )}
        </Pressable>
      </View>
    </Surface>
  );
};

export default FAB;
