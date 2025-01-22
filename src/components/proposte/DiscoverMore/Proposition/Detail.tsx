
import { FC } from 'react'
import { Divider, Typography, Box } from '@mui/material'

interface DetailProps {
    price: number,
    description: string
    divider?: boolean
}

export const Detail: FC<DetailProps> = ({ price, description, divider }) => {
    return (
        <>
            <Box>
                <Typography variant="h6">{price} €</Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </Box>
            {divider && <Divider />}
        </>
    )
}
