import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
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
			<script async={true} place={"endOfHead"} rawKey={"601fe489326c9159292336af"}>
				{"alert(\"Main page\")"}
			</script>
			<meta
				charset={""}
				name={"keywords"}
				content={"HTML CSS JavaScript \n"}
				http-equiv={"some value"}
				place={"endOfHead"}
				rawKey={"601fe495f4f1be9328ff352b"}
			/>
			<style place={"endOfHead"} rawKey={"601fe4acb1f9df9f2ab2cd51"}>
				{"body {\nbackground-color: yellow}"}
			</style>
			<link
				href={"https://fontlibrary.org/face/gagliostro"}
				type={"text/css"}
				rel={"stylesheet"}
				media={"screen"}
				place={"endOfHead"}
				rawKey={"601fe4bace4a056c32847ed5"}
			/>
		</RawHtml>
	</Theme>;
});