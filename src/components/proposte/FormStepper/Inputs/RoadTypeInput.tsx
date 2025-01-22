import { FC } from "react";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { styled } from '@mui/material/styles';


interface IRoadTypeInputProps {
    value: string | null
    handleStradeChange: (e: React.MouseEvent<HTMLElement>, updatedStrade: string | null) => void
}

export const RoadTypeInput: FC<IRoadTypeInputProps> = ({ value, handleStradeChange }) => {

    return (
        <Stack direction={"row"}>
            <CustomToggleButtonGroup aria-label="selecting road type" value={value} onChange={handleStradeChange} exclusive>
                <ToggleButton value={"urban"} aria-label="urban">
                    Urbane
                </ToggleButton>
                <ToggleButton value={"mix"} aria-label="mix">
                    Miste
                </ToggleButton>
                <ToggleButton value={"highway"} aria-label="highway">
                    Autostrade
                </ToggleButton>
            </CustomToggleButtonGroup>
        </Stack>
    )
}

const CustomToggleButtonGroup = styled(ToggleButtonGroup)({
    gap: "15px",
    borderRadius: 0,
    width: "100%",
    justifyContent: "space-between",

    '& .MuiToggleButtonGroup-grouped': {
        border: "1px solid rgba(255, 255, 255, 0.1) !important",
        color: "#7F7F7F",
        borderRadius: " 100vmax !important",
        // flexGrow: 1,
        textTransform: "capitalize",
        padding: "4px",
        width: "clamp(90px, 33%, 150px)"
    },
    '& .Mui-selected': {
        backgroundImage: "linear-gradient(135deg, #17EAD9 0%, #6176F4 100%)",
        color: "#FFF !important",
        border: "2px solid #FFF !important",
    }
})



