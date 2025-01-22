import React, { FC, SetStateAction } from "react"
import { TextField, Grid, Autocomplete, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import { CarInputFilled } from ".";
import "./Autocomplete.css"
import Lottie from "lottie-react";
import circleLoading from "../../../../assets/animations/circle-loading.json"


interface CarModelInputProps {
	vehicleInputs: {
		vehicleBrand: string | null,
		vehicleModel: string | null,
		vehicleVersion: string | null
	},
	setVehicleInput: React.Dispatch<SetStateAction<{ vehicleBrand: string | null; vehicleModel: string | null; vehicleVersion: string | null; }>>,
	onReset: () => void;
	isFilled: boolean,
	isLoading: boolean,
};


export const CarModelInput: FC<CarModelInputProps> = ({ vehicleInputs, setVehicleInput, isFilled, isLoading, onReset }) => {

	const brand = ["Mercedes"]
	const model = ["GLA"]
	const version = ["200 d auto 4matic 2019"]

	const loadingStyle = {
		height: 50,
	};

	return (
		<>
			{isLoading ?
				<Lottie style={loadingStyle} animationData={circleLoading} loop={true} />
				:
				isFilled ?
					(<CarInputFilled onReset={onReset} />)
					:
					(
						<Grid container spacing={1.5}>
							<Grid item sm md={4}>
								<Autocomplete forcePopupIcon={false}
									PaperComponent={({ children }) => (
										<Paper style={{ fontSize: "11px" }}>{children}</Paper>
									)}
									options={brand} renderInput={(params) => <StyledTextField {...params}
										hiddenLabel
										placeholder="Brand"
										name="vehicleBrand"

									/>}
									id="vehicleBrand"
									value={vehicleInputs.vehicleBrand}
									onChange={(event: any, newValue: string | null) => setVehicleInput({ ...vehicleInputs, vehicleBrand: newValue as string })}
									sx={{
										border: "none",
										"& .MuiOutlinedInput-root": {
											border: "none",
											padding: "0"
										},
										"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
											border: "none"
										}
									}}
								/>
							</Grid>
							<Grid item sm md={4}>
								<Autocomplete forcePopupIcon={false}
									PaperComponent={({ children }) => (
										<Paper style={{ fontSize: "11px" }}>{children}</Paper>
									)}
									options={model} renderInput={(params) => <StyledTextField {...params}

										placeholder="Model"
										name="vehicleModel"

									/>}
									id="vehicleModel"
									value={vehicleInputs.vehicleModel}
									onChange={(event: any, newValue: string | null) => setVehicleInput({ ...vehicleInputs, vehicleModel: newValue as string })}
									sx={{
										border: "none",
										"& .MuiOutlinedInput-root": {
											border: "none",
											padding: "0"
										},
										"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
											border: "none"
										}
									}}
								/>
							</Grid>
							<Grid item sm md={4}>
								<Autocomplete forcePopupIcon={false}
									PaperComponent={({ children }) => (
										<Paper style={{ fontSize: "11px" }}>{children}</Paper>
									)}
									options={version} renderInput={(params) => <StyledTextField {...params}
										hiddenLabel
										placeholder="Version"
										name="vehicleVersion"
									/>}
									id="vehicleVersion"
									value={vehicleInputs.vehicleVersion}
									onChange={(event: any, newValue: string | null) => setVehicleInput({ ...vehicleInputs, vehicleVersion: newValue as string })}
									sx={{
										border: "none",
										"& .MuiOutlinedInput-root": {
											border: "none",
											padding: "0"
										},
										"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
											border: "none"
										}
									}}
								/>
							</Grid>
						</Grid>)
			}
		</>
	)
}


const StyledTextField = styled(TextField)({
	border: "1px solid #505050",
	borderRadius: "8px",
	outline: "none",
	background: "#3d3d3d",

	"&:hover": { border: "1px solid white", outline: "none", },

	"& .MuiOutlinedInput-root": {
		fontSize: "12px",
		color: "white",
		outline: "none",
		border: "none"
	}
})
