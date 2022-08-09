import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import { FaGalacticRepublic, FaHornbill, FaReact } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"grupo"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Design
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Frontend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Backend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62ed7b2749c9db0023480dce"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});