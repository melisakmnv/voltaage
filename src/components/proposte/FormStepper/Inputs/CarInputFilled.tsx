import { useState, FC } from 'react'
import { Stack, Box, Typography, Chip, IconButton } from '@mui/material';
import { HeartIcon, ChangeIcon } from '../../../icons';
import mercedesIcon from "../../../../assets/cars/mercedes-icon.svg"


interface CarInputFilledProps {
    onReset: () => void;

}
export const CarInputFilled: FC<CarInputFilledProps> = ({ onReset }) => {

    const [isGreen, setIsGreen] = useState(false)

    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Box position={"relative"}>
                    <Box
                        component="img"
                        alt="Car"
                        src={mercedesIcon}
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '100vmax',
                            outline: "2px solid #6435F4",
                            border: "3px solid #242424",
                            width: 44,
                            height: 44,
                            objectFit: 'contain',

                        }}
                    />
                    <IconButton onClick={onReset} sx={{ position: "absolute", bottom: "1px", right: "-5px", p: 0 }}>
                        <ChangeIcon />
                    </IconButton>
                </Box>
                <Typography variant="h6">
                    200 d 4MATIC  2019
                </Typography>
            </Stack>
            {isGreen ? <Chip label="GREEN" size="small" color="success" icon={<HeartIcon />} /> : <Chip label="NON GREEN" size="small" sx={{ p: "5px 5px", bgcolor: "#482225", color: "#FF8D94", fontSize: "10px", fontWeight: 700, letterSpacing: " 0.12em" }} />}
        </Stack >
    )
}
