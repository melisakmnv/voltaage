import { FC } from "react";
import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles';

interface SwitchButtonProps {
	toggle?: boolean
	handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SwitchButton: FC<SwitchButtonProps> = ({ toggle, handleToggle }) => {

	return (
		<AntSwitch checked={toggle} onChange={handleToggle} />
	)
}

const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 32,
	height: 16,
	padding: 0,
	display: 'flex',
	'&:active': {
		'& .MuiSwitch-thumb': {
			width: 15,
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		padding: 2,
		'&.Mui-checked': {
			transform: 'translateX(15px)',
			color: "#8aea4f",
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: 'white',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%), 0px 0px 0px 1px #69b23d inset',
		width: 12,
		height: 12,
		borderRadius: 6,
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: 'rgba(255,255,255,.35)',
		boxSizing: 'border-box',
	},
}));
