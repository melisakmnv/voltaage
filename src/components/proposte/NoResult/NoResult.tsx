import { Stack, Typography } from "@mui/material"
import { ArrowLeftIcon } from "../../icons"

export const NoResult = () => {
    return (
        <Stack height={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Stack spacing={2.5} width={1/3} justifyContent={"center"} alignItems={"center"} sx={{color: "#FFFFFF", textAlign:"center"}}>
                <Typography variant="h1" sx={{ fontSize: "24px", fontWeight: 500,  }}>👋 Ciao</Typography>
                <Typography variant="body1">Rispondi a queste poche domande che trovi qui a sinistra.</Typography>
                <ArrowLeftIcon/>
            </Stack>
        </Stack>
    )
}
