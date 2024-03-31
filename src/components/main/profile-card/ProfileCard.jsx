import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LanguageContext } from "../language-context/LanguageContext";
import languagesData from "../data/languages.json";
import Discussion from "../../discussion/Discussion.jsx";
import { motion } from "framer-motion";


const ProfileCard = () => {
	const { currentLanguage } = useContext(LanguageContext);
	const profileData = {
		name: languagesData[currentLanguage].agentName,
	};

	const animationStates = {
		IDLE: {
			scale: [0.7, 1.0, 0.7, 1.0, 0.7], // Erratically change scale
			rotate: [0, 10, -10, 10, 0], // Add rotation for dynamic effect
			transition: {
				duration: 8, // Speed up the transition for an erratic effect
				repeat: Infinity,
				ease: "linear", // Use a linear easing for a more erratic feel
			},
		},
		EXCITED: {
			scale: [0.8, 1, 0.8, 1, 0.8], // Erratically change scale
			rotate: [0, 10, -10, 10, 0], // Add rotation for dynamic effect
			transition: {
				duration: 2, // Speed up the transition for an erratic effect
				repeat: Infinity,
				ease: "linear", // Use a linear easing for a more erratic feel
			},
		},
		THINKING: {
			scale: [0.7, 0.7, 0.7], // Slight scale to keep the movement
			rotate: [0, 720], // Continuous rotation
			borderRadius: ["50%", "20%", "20%", "50%"], // Change borderRadius for rounded square edges
			transition: {
				duration: 5,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	// We will need a piece of state to hold and change the animation state
	const [animationState, setAnimationState] = React.useState("IDLE");

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				textAlign: "center",
				color: "white",
			}}
		>
			<Typography variant="h5" component="h2" gutterBottom>
				{profileData.name}
			</Typography>
			{/* Enhanced Circular Breathing Animation for Pixar-like liveliness */}
			<motion.div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: 180,
					width: 180,
					borderRadius: "50%",
					background: "linear-gradient(#FDC830, #F37335)",
					boxShadow: "0 0 8px rgba(255,255,255,0.5)",
				}}
				variants={animationStates}
				initial="IDLE"
				animate={animationState}
				// onClick or other event handlers can be used to change the state
				// For example, onClick={() => setAnimationState('EXCITED')}
			/>
			<Discussion
				agentName={profileData.name}
				language={currentLanguage}
				setAnimationState={setAnimationState}
			/>
			<Typography variant="subtitle1">Learning {currentLanguage}</Typography>
		</Box>
	);
};

export default ProfileCard;
