import React, { FC, ReactNode, SetStateAction, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Stack,
	IconButton,
	linearProgressClasses,
	LinearProgress,
	FormControlLabel,
	Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { InfoIcon } from '../../icons';
import { InfoModal } from '../Modal/InfoModal';
import { SwitchButton } from '../FormStepper/Inputs/SwitchButton';
import dollarBag from '../../../assets/icons/dollarBag.svg'

interface InfoCardProps {
	icon?: ReactNode;
	title?: string;
	unit?: string;
	electicityCost?: number,
	co2Total?: number,
	informative?: boolean;
	extra?: boolean;
	bgColor?: string;
	borderRadius: string;
	progress?: boolean;
	children: ReactNode;
	panelSolar?: boolean;
	onToggle?: React.Dispatch<SetStateAction<boolean>>;
	id: string;
	lg?: boolean
}

export const InfoCard: FC<InfoCardProps> = ({
	id,
	children,
	title,
	unit,
	electicityCost,
	co2Total,
	icon,
	informative,
	extra,
	bgColor,
	borderRadius,
	progress,
	panelSolar,
	onToggle,
	lg
}) => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onToggle?.(event.target.checked);
	const handleModal = () => setOpenModal((prev) => !prev);

	return (
		<>
			<Card
				elevation={0}
				sx={{
					color: 'white',
					backgroundColor: bgColor,
					backgroundImage: bgColor === 'colored' ? 'linear-gradient(135deg, #17EAD9 0%, #6176F4 100%)' : "none",
					borderRadius: borderRadius,
					position: 'relative',
					overflow: 'visible',
					p: lg ? '2rem 1rem' : 'none',
					'& .MuiCardContent-root:last-child ': {
						paddingBottom: '1rem',
					},
				}}
			>
				{informative && (
					<IconButton id={id} onClick={handleModal} sx={{ position: 'absolute', right: '5px', top: '5px' }}>
						<InfoIcon size={12} color="white" />
					</IconButton>
				)}
				<CardContent
					sx={{
						paddingX: 2.5,
					}}
				>
					<Stack spacing={1.25}>
						<Stack direction={'row'} alignItems="baseline">
							{id === "savings" ?
								(<Box width={32} height={32} mr={1} component={"img"} src={dollarBag} >
								</Box>)
								: <Box mr={1}>{icon}</Box>}

							<Stack direction={'row'} gap={0.5} alignItems="baseline" color={'white'}>
								<Typography variant={lg ? "h5" : "h6"} fontWeight={600} lineHeight={'24px'}>
									{title}
								</Typography>
								<Typography variant={lg ? "body1" : "caption"} fontWeight={lg ? 600 : 500} lineHeight={'14px'}>
									{unit}
								</Typography>
							</Stack>
						</Stack>

						{progress && <BorderLinearProgress variant="determinate" value={80} />}

						<Typography variant="caption" lineHeight={'16px'}>
							{children}
						</Typography>
					</Stack>
				</CardContent>
				{extra && (
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						alignItems={'center'}
						px={2.5}
						py={2}
						borderTop={'1px solid #ffffff26'}
					>
						<Typography fontSize="10px" lineHeight={'12px'} fontWeight={600} textTransform="uppercase">
							Con pannelli solari?
						</Typography>
						<FormControlLabel label={''} control={<SwitchButton toggle={panelSolar} handleToggle={handleChange} />} />
					</Stack>
				)}
				{openModal && <InfoModal id={id} open={openModal} onOpen={setOpenModal} value={parseInt(title!)} electicityCost={electicityCost!} co2Total={co2Total!} />}
			</Card>
		</>
	);
};

const BorderLinearProgress = styled(LinearProgress)(() => ({
	height: 4,
	borderRadius: 5,

	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: '#8ABDEB',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: '#FFF',
	},
}));
