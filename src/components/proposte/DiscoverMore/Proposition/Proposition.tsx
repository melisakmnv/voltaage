import { FC } from "react";
import {
	Button,
	Card,
	CardActions,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import mercedes from "../../../../assets/cars/Mercedes-EQA.svg";
import { Detail } from ".";

interface PropositionProps {
	main: boolean;
	handleOpenForm?: () => void;
}

const mainPropositionStyle = {
	width: "100%",
	height: "77vh",
	backgroundColor: "#000",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	borderRadius: "18px",
	overflow: "visible",
};

const otherPropositionStyle = {
	width: "100%",
	height: "clamp(77vh, 100%, 77vh)",
	backgroundColor: "#f4f4f4",
	color: "black",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	borderRadius: "18px",
	overflow: "visible",
};

export const Proposition: FC<PropositionProps> = ({ main, handleOpenForm }) => {
	return (
		<Card sx={main ? mainPropositionStyle : otherPropositionStyle}>
			{main && <div className="car-suggest__ribbon">Voltaage suggests</div>}
			<CardMedia
				component="img"
				image={mercedes}
				alt="mercedes"
				sx={{
					width: main ? '90%' : '70%',
					height: "auto",
					objectFit: "contain",
					alignSelf: "center",
					paddingTop: main ? '0' : '4rem'
				}}
			/>
			<Stack
				justifyContent="space-between"
				position="relative"
				gap="1.5rem"
				pb={3}
				height={"100%"}
				minHeight={"fit-content"}
				className="--scrollbar-hidden"
				sx={{
					textAlign: "center",
					overflow: "auto",
				}}
			>
				<Typography variant="subtitle1">Mercedes EQA</Typography>
				<Detail price={51.15} description="Prezzo di listino" divider={true} />
				<Detail
					price={9.038}
					description="Assicurazione e bollo"
					divider={true}
				/>
				<Detail price={2.871} description="Carburante" divider={true} />
				<Detail price={4.978} description="Manutenzione" divider={true} />
				{main && (
					<>
						<Detail
							price={51.05}
							description="Prezzo di listino"
							divider={true}
						/>
						<Detail
							price={51.05}
							description="Prezzo di listino"
							divider={true}
						/>
						<Detail
							price={51.05}
							description="Prezzo di listino"
							divider={false}
						/>
					</>
				)}
			</Stack>

			{main && (
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "center",
						padding: "1rem",
						textAlign: "center",
						background: "#25325a",
						borderRadius: "0 0 18px 18px",
					}}
				>
					<Button
						onClick={handleOpenForm}
						variant="contained"
						sx={{
							display: "flex",
							justifyContent: "center",
							padding: "0.5rem 1.5rem",
							textAlign: "center",
							background: "#fefffe",
							borderRadius: "100vmax",
							color: "black",
						}}
					>
						Più informazioni
					</Button>
				</CardActions>
			)}
		</Card>
	);
};
