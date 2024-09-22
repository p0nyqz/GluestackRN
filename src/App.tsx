/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from "react";
import "../global.css";
import { GluestackUIProvider } from "gluestack/gluestack-ui-provider";
// import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";
import type { PropsWithChildren } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";

import AddInfo from "./components/additional-information";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	return (
		<View style={styles.sectionContainer}>
			<AddInfo />
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}
			>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
}

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<GluestackUIProvider mode="light">
			<SafeAreaView style={backgroundStyle}>
				<StatusBar
					barStyle={isDarkMode ? "light-content" : "dark-content"}
					backgroundColor={backgroundStyle.backgroundColor}
				/>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={backgroundStyle}
				>
					<Header />
					<View
						style={{
							backgroundColor: isDarkMode ? Colors.black : Colors.white,
						}}
					>
						<Section title="Step One">
							Edit <Text style={styles.highlight}>App.tsx</Text> to change this
							screen and then come back to see your edits.
						</Section>
						<Section title="See Your Changes">
							<ReloadInstructions />
						</Section>
						<Section title="Debug">
							<DebugInstructions />
						</Section>
						<Section title="Learn More">
							Read the docs to discover what to do next:
						</Section>
						<LearnMoreLinks />
					</View>
				</ScrollView>
			</SafeAreaView>
		</GluestackUIProvider>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
	},
	highlight: {
		fontWeight: "700",
	},
});

export default App;
