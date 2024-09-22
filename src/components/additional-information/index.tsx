import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionTitleText,
	AccordionContent,
	AccordionContentText,
	AccordionIcon,
} from "gluestack/accordion";

import { Divider } from "gluestack/divider";

import {
	AlertCircleIcon,
	ChevronUpIcon,
	ChevronDownIcon,
} from "lucide-react-native";
// import { ChevronUpIcon, ChevronDownIcon } from "../ui/icon";

import {
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	FormControlErrorText,
	FormControlErrorIcon,
} from "gluestack/form-control";
import { Input, InputField } from "gluestack/input";

import {
	AlertDialog,
	AlertDialogBackdrop,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogFooter,
	AlertDialogBody,
} from "gluestack/alert-dialog";

import {
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
} from "gluestack/select";

import { Button, ButtonText } from "gluestack/button";
import { Heading } from "gluestack/heading";
import { Text } from "gluestack/text";

import { Box } from "gluestack/box";

const AddInfo = () => {
	// const [selectedValues, setSelectedValues] = React.useState([
	// 	"item-1",
	// 	"item-2",
	// ]);
	const [showAlertDialog, setShowAlertDialog] = React.useState(false);
	const handleClose = () => setShowAlertDialog(false);

	return (
		<>
			<Box className="h-32 w-72">
				<FormControl>
					<FormControlLabel className="mb-1">
						<FormControlLabelText>Password</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField
							type="password"
							defaultValue="12345"
							placeholder="password"
						/>
					</Input>
					<FormControlHelper>
						<FormControlHelperText>
							Must be at least 6 characters.
						</FormControlHelperText>
					</FormControlHelper>
					<FormControlError>
						<FormControlErrorIcon size={10} as={AlertCircleIcon} />
						<FormControlErrorText>
							At least 6 characters are required.
						</FormControlErrorText>
					</FormControlError>
				</FormControl>
			</Box>

			<Select>
				<SelectTrigger
					variant="outline"
					size="md"
					className="flex justify-between"
				>
					<SelectInput placeholder="Select option" />
					<SelectIcon className="mr-3" as={ChevronDownIcon} size="sm" />
				</SelectTrigger>
				<SelectPortal>
					<SelectBackdrop />
					<SelectContent>
						<SelectDragIndicatorWrapper>
							<SelectDragIndicator />
						</SelectDragIndicatorWrapper>
						<SelectItem label="UX Research" value="ux" />
						<SelectItem label="Web Development" value="web" />
						<SelectItem
							label="Cross Platform Development Process"
							value="Cross Platform Development Process"
						/>
						<SelectItem label="UI Designing" value="ui" isDisabled={true} />
						<SelectItem label="Backend Development" value="backend" />
					</SelectContent>
				</SelectPortal>
			</Select>

			<Accordion
				size="md"
				variant="filled"
				type="single"
				isCollapsible={true}
				isDisabled={false}
				className="m-5 w-[90%] border border-outline-200"
			>
				<AccordionItem value="a">
					<AccordionHeader>
						<AccordionTrigger>
							{({ isExpanded }) => {
								console.log("Accordion expanded:", isExpanded);
								return (
									<>
										<AccordionTitleText>
											How do I place an order?
										</AccordionTitleText>
										{isExpanded ? (
											<AccordionIcon as={ChevronUpIcon} className="ml-3" />
										) : (
											<AccordionIcon as={ChevronDownIcon} className="ml-3" />
										)}
									</>
								);
							}}
						</AccordionTrigger>
					</AccordionHeader>
					<AccordionContent>
						<AccordionContentText>
							To place an order, simply select the products you want, proceed to
							checkout, provide shipping and payment information, and finalize
							your purchase.
						</AccordionContentText>
					</AccordionContent>
				</AccordionItem>
				<Divider />
				<AccordionItem value="b">
					<AccordionHeader>
						<AccordionTrigger>
							{({ isExpanded }) => {
								return (
									<>
										<AccordionTitleText>
											Payment methods do you accept?
										</AccordionTitleText>
										{isExpanded ? (
											<AccordionIcon as={ChevronUpIcon} className="ml-3" />
										) : (
											<AccordionIcon as={ChevronDownIcon} className="ml-3" />
										)}
									</>
								);
							}}
						</AccordionTrigger>
					</AccordionHeader>
					<AccordionContent>
						<AccordionContentText>
							We accept all major credit cards, including Visa, Mastercard, and
							American Express. We also support payments through PayPal.
						</AccordionContentText>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Button onPress={() => setShowAlertDialog(true)}>
				<ButtonText>Open Dialog</ButtonText>
			</Button>
			<AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
				<AlertDialogBackdrop />
				<AlertDialogContent>
					<AlertDialogHeader>
						<Heading className="text-typography-950 font-semibold" size="md">
							Are you sure you want to delete this post?
						</Heading>
					</AlertDialogHeader>
					<AlertDialogBody className="mt-3 mb-4">
						<Text size="sm">
							Deleting the post will remove it permanently and cannot be undone.
							Please confirm if you want to proceed.
						</Text>
					</AlertDialogBody>
					<AlertDialogFooter className="">
						<Button
							variant="outline"
							action="secondary"
							onPress={handleClose}
							size="sm"
						>
							<ButtonText>Cancel</ButtonText>
						</Button>
						<Button size="sm" onPress={handleClose}>
							<ButtonText>Delete</ButtonText>
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};

export default AddInfo;

// <Accordion
// 	variant="unfilled"
// 	type="multiple"
// 	value={selectedValues}
// 	onValueChange={(item) => setSelectedValues(item)}
// 	className="m-5 w-[95%]"
// >
// 	<AccordionItem
// 		value="item-1"
// 		className="border-t border-b border-outline-300"
// 	>
// 		<AccordionHeader>
// 			<AccordionTrigger>
// 				{({ isExpanded }) => (
// 					<>
// 						<AccordionTitleText>
// 							Exploring Nature's Wonders
// 						</AccordionTitleText>
// 						{isExpanded ? (
// 							<AccordionIcon as={ChevronUpIcon} />
// 						) : (
// 							<AccordionIcon as={ChevronDownIcon} />
// 						)}
// 					</>
// 				)}
// 			</AccordionTrigger>
// 		</AccordionHeader>
// 		<AccordionContent>
// 			<AccordionContentText>
// 				Embark on a journey through the breathtaking landscapes and diverse
// 				ecosystems of our planet. From majestic mountains to serene oceans,
// 				discover the beauty that nature has to offer.
// 			</AccordionContentText>
// 		</AccordionContent>
// 	</AccordionItem>

// 	<AccordionItem value="item-2">
// 		<AccordionHeader>
// 			<AccordionTrigger>
// 				{({ isExpanded }) => (
// 					<>
// 						<AccordionTitleText>
// 							The Art of Culinary Delights
// 						</AccordionTitleText>
// 						{isExpanded ? (
// 							<AccordionIcon as={ChevronUpIcon} />
// 						) : (
// 							<AccordionIcon as={ChevronDownIcon} />
// 						)}
// 					</>
// 				)}
// 			</AccordionTrigger>
// 		</AccordionHeader>
// 		<AccordionContent>
// 			<AccordionContentText>
// 				Indulge your senses in a culinary adventure. Uncover the secrets
// 				behind delectable dishes, learn about unique flavor profiles, and
// 				ignite your passion for cooking.
// 			</AccordionContentText>
// 		</AccordionContent>
// 	</AccordionItem>

// 	<AccordionItem
// 		value="item-3"
// 		className="border-t border-b border-outline-300"
// 	>
// 		<AccordionHeader>
// 			<AccordionTrigger>
// 				{({ isExpanded }) => (
// 					<>
// 						<AccordionTitleText>
// 							Mastering the Creative Process
// 						</AccordionTitleText>
// 						{isExpanded ? (
// 							<AccordionIcon as={ChevronUpIcon} />
// 						) : (
// 							<AccordionIcon as={ChevronDownIcon} />
// 						)}
// 					</>
// 				)}
// 			</AccordionTrigger>
// 		</AccordionHeader>
// 		<AccordionContent>
// 			<AccordionContentText>
// 				Immerse yourself in the world of creativity. Unleash your artistic
// 				potential, whether it's through writing, painting, or any other form
// 				of expression.
// 			</AccordionContentText>
// 		</AccordionContent>
// 	</AccordionItem>
// </Accordion>
