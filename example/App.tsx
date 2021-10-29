import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, View } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Backdrop,
  BackdropSubheader,
  Badge,
  Banner,
  Button,
  FAB,
  IconButton,
  Switch,
  Text,
  ThemeProvider,
  useTheme,
} from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

function App() {
  const [revealed, setRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const { palette } = useTheme();

  return (
    <View style={{ padding: 24, backgroundColor: palette.background }}>
      <View style={{ flexDirection: "row" }}>
        <ActivityIndicator />
        <ActivityIndicator color="secondary" style={{ marginStart: 24 }} />
        <ActivityIndicator color="error" size="large" style={{ marginStart: 24 }} />
      </View>

      <Appbar title="Page title" style={{ width: 360, marginTop: 24 }} />

      <Appbar title="Page title" centerTitle color="secondary" style={{ width: 360, marginTop: 24 }} />

      <Appbar
        title="Page title"
        leading={props => (
          <IconButton {...props} onPress={() => undefined} icon={<Icon name="menu" size={24} color={props.color} />} />
        )}
        trailing={props => [
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="heart" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="magnify" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="dots-vertical" size={24} color={props.color} />}
          />,
        ]}
        style={{ width: 360, marginTop: 24 }}
      />

      <Appbar
        variant="prominent"
        title="Page title"
        leading={props => (
          <IconButton {...props} onPress={() => undefined} icon={<Icon name="menu" size={24} color={props.color} />} />
        )}
        trailing={props => [
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="heart" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="magnify" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="dots-vertical" size={24} color={props.color} />}
          />,
        ]}
        style={{ width: 360, marginTop: 24 }}
      />

      <Appbar
        variant="prominent"
        title="Page title"
        leading={props => (
          <IconButton {...props} onPress={() => undefined} icon={<Icon name="menu" size={24} color={props.color} />} />
        )}
        trailing={props => [
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="heart" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="magnify" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="dots-vertical" size={24} color={props.color} />}
          />,
        ]}
        image={
          <Image
            source={{ uri: "https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png" }}
            style={{ position: "absolute", top: 0, start: 0, end: 0, bottom: 0 }}
          />
        }
        style={{ width: 360, marginTop: 24 }}
      >
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          style={{ position: "absolute", end: 16, bottom: -28 }}
        />
      </Appbar>

      <Appbar
        variant="prominent"
        title="Page title"
        leading={props => (
          <IconButton {...props} onPress={() => undefined} icon={<Icon name="menu" size={24} color={props.color} />} />
        )}
        trailing={props => [
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="heart" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="magnify" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="dots-vertical" size={24} color={props.color} />}
          />,
        ]}
        style={{ width: 360, marginTop: 24 + 28 }}
      >
        <FAB
          size="mini"
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          style={{ position: "absolute", start: 16, bottom: -20 }}
        />
      </Appbar>

      <Appbar
        position="bottom"
        leading={props => (
          <IconButton {...props} onPress={() => undefined} icon={<Icon name="menu" size={24} color={props.color} />} />
        )}
        trailing={props => [
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="magnify" size={24} color={props.color} />}
          />,
          <IconButton
            {...props}
            onPress={() => undefined}
            icon={<Icon name="dots-vertical" size={24} color={props.color} />}
          />,
        ]}
        style={{ width: 360, marginTop: 24 + 28 }}
      >
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          style={{ position: "absolute", top: -28, alignSelf: "center" }}
        />
      </Appbar>

      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Avatar label="Kent Dodds" />
        <Avatar style={{ marginStart: 24 }} label="UN" initials={false} />
        <Avatar style={{ marginStart: 24 }} label="Jed Watson" autoColor />
        <Avatar style={{ marginStart: 24 }} label="Tim Neutkens" autoColor />
        <Avatar style={{ marginStart: 24 }} icon={props => <Icon name="account" {...props} />} />
        <Avatar
          style={{ marginStart: 24 }}
          icon={props => <Icon name="account" {...props} />}
          label="Jed Watson"
          autoColor
        />
        <Avatar
          style={{ marginStart: 24 }}
          icon={props => <Icon name="calendar" {...props} />}
          label="Tim Neutkens"
          autoColor
        />
        <Avatar style={{ marginStart: 24 }} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
        <Avatar style={{ marginStart: 24 }} image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
        <Avatar style={{ marginStart: 24 }} image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
      </View>

      <Backdrop
        style={{ width: 360, minHeight: 200, marginTop: 24 }}
        revealed={revealed}
        header={
          <Appbar
            title="Page title"
            elevation={0}
            leading={props => (
              <IconButton
                color={props.color}
                onPress={() => setRevealed(prev => !prev)}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )}
          />
        }
        backLayer={
          <View style={{ height: 94, padding: 16 }}>
            <Text variant="h4">Hi</Text>
          </View>
        }
      >
        <BackdropSubheader title="Subheader" />
      </Backdrop>

      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Badge label={4} />
        <Badge style={{ marginStart: 24 }} label={23} />
        <Badge style={{ marginStart: 24 }} label={100} color="primary" />
        <Badge style={{ marginStart: 24 }} label="error" color="error" />
      </View>

      <Banner
        style={{ width: 360, marginTop: 24 }}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, impedit, sint. Numquam, porro, voluptatem."
        buttons={[<Button title="Fix it" variant="text" compact />, <Button title="Dismiss" variant="text" compact />]}
      />

      <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: 12 }}>
        <Button title="Contained" onPress={() => undefined} />
        <Button variant="outlined" title="Outlined" onPress={() => undefined} style={{ margin: 12 }} />
        <Button variant="text" title="Text" onPress={() => undefined} style={{ margin: 12 }} />
        <Button variant="text" title="Button" color="secondary" onPress={() => undefined} style={{ margin: 12 }} />
        <Button title="Button" color="error" onPress={() => undefined} style={{ margin: 12 }} />
        <Button variant="outlined" title="Button" color="#d4ac2d" onPress={() => undefined} style={{ margin: 12 }} />
        <Button title="Button" color="pink" tintColor="red" onPress={() => undefined} style={{ margin: 12 }} />
        <Button
          variant="outlined"
          title="Delete"
          leading={props => <Icon name="delete" {...props} />}
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Send"
          trailing={props => <Icon name="send" {...props} />}
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button title="Button" onPress={() => undefined} style={{ margin: 12 }} />
        <Button title="Button" uppercase={false} onPress={() => undefined} style={{ margin: 12 }} />
        <Button title="Button" onPress={() => undefined} style={{ margin: 12 }} />
        <Button title="Disable Elevation" disableElevation onPress={() => undefined} style={{ margin: 12 }} />
        <Switch value={isLoading} onValueChange={val => setIsLoading(val)} style={{ margin: 12 }} />
        <Button
          title="Button"
          leading={props => <Icon name="plus" {...props} />}
          loading={isLoading}
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Button"
          trailing={props => <Icon name="plus" {...props} />}
          loading={isLoading}
          loadingIndicatorPosition="trailing"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Button"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Button"
          leading={props => <Icon name="plus" {...props} />}
          loading={isLoading}
          loadingIndicator="⏰"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Custom Text"
          loading={isLoading}
          loadingIndicator="Loading..."
          loadingIndicatorPosition="overlay"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Button"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          loadingIndicator={props => (
            <Text
              style={{
                backgroundColor: props.color,
                color: "black",
                borderRadius: 50,
                width: 24,
                height: 24,
                textAlign: "center",
              }}
            >
              ...
            </Text>
          )}
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Button
          title="Button"
          trailing={props => <Icon name="plus" {...props} />}
          loading={isLoading}
          loadingIndicatorPosition="trailing"
          loadingIndicator="⏰"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", marginTop: 12 }}>
        <FAB icon={props => <Icon name="plus" {...props} />} onPress={() => undefined} />
        <FAB
          icon={props => <Icon name="pencil" {...props} />}
          loading
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="navigation" {...props} />}
          variant="extended"
          label="Navigate"
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="star" {...props} />}
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB variant="extended" label="Button" color="primary" onPress={() => undefined} style={{ margin: 12 }} />
        <FAB
          icon={props => <Icon name="star" {...props} />}
          variant="extended"
          label="Button"
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB icon={props => <Icon name="account" {...props} />} onPress={() => undefined} style={{ margin: 12 }} />
        <FAB
          icon={props => <Icon name="account" {...props} />}
          size="mini"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          variant="extended"
          icon={props => <Icon name="heart" {...props} />}
          label="Button"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          variant="extended"
          icon={props => <Icon name="heart" {...props} />}
          label="Button"
          size="mini"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB icon={props => <Icon name="lock" {...props} />} onPress={() => undefined} style={{ margin: 12 }} />
        <FAB
          icon={props => <Icon name="lock" {...props} />}
          tintColor="red"
          onPress={() => undefined}
          variant="extended"
          label="Button"
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="lock" {...props} />}
          color="onPrimary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="lock" {...props} />}
          color="#FDCAE4"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="lock" {...props} />}
          color="#FDCAE4"
          tintColor="yellow"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Switch
          tintColor={palette.secondary}
          value={isLoading}
          onValueChange={val => setIsLoading(val)}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          loading={isLoading}
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          size="mini"
          loading={isLoading}
          color="primary"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Switch
          tintColor={palette.error}
          value={isLoading}
          onValueChange={val => setIsLoading(val)}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          loading={isLoading}
          color="error"
          loadingIndicator="⏳"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          loadingIndicator={props => (
            <Text
              style={{
                backgroundColor: props.color,
                color: "white",
                borderRadius: 50,
                width: 24,
                height: 24,
                textAlign: "center",
              }}
            >
              ...
            </Text>
          )}
          color="onError"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          variant="extended"
          icon={props => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          loadingIndicator="Loading..."
          color="onError"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          size="mini"
          loading={isLoading}
          loadingIndicator="⏰"
          color="onError"
          onPress={() => undefined}
          style={{ margin: 12 }}
        />
        <Switch value={isVisible} onValueChange={val => setIsVisible(val)} style={{ margin: 12 }} />
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          visible={isVisible}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          size="mini"
          visible={isVisible}
          style={{ margin: 12 }}
        />
        <FAB
          icon={props => <Icon name="navigation" {...props} />}
          variant="extended"
          label="Navigate"
          color="primary"
          onPress={() => undefined}
          visible={isVisible}
          style={{ margin: 12 }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default function AppProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
