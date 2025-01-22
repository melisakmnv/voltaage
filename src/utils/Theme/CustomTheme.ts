import { Breakpoint, createTheme, Theme } from '@mui/material';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		light: true;
	}
}

interface CustomThemeProperties {
	contentSize: Breakpoint;
	extraColors: {
		nightBlue: string;
		mintGreen: string;
		ground: string;
		pastelRed: string;
	};
}

export type CustomThemeDefinition = Theme & CustomThemeProperties;

// created by using Material-UI Theme Creator
// See: https://bareynol.github.io/mui-theme-creator
export const CUSTOM_THEME: CustomThemeDefinition = Object.assign<Theme, CustomThemeProperties>(
	createTheme({
		components: {
			MuiButton: {
				variants: [
					{
						props: { variant: 'light' },

						style: {
							border: 'none',
							backgroundColor: '#ffffff',
							color: '#000000',
							'&:hover': {
								border: 'none',
								backgroundColor: '#e0e0e0',
							},
						},
					},
				],
				styleOverrides: {
					root: {
						textTransform: 'none',
						borderRadius: 25,
						minWidth: 48,
					},
					sizeSmall: {
						height: 40,
						fontSize: 14,
						fontWeight: 600,
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 20,
						paddingRight: 20,
					},
					sizeMedium: {
						height: 48,
						fontSize: 16,
						fontWeight: 600,
						paddingTop: 16,
						paddingBottom: 16,
						paddingLeft: 24,
						paddingRight: 24,
					},
					outlinedSecondary: {
						border: 'solid 2px #000000',
						color: '#000000',
						'&:hover': {
							border: 'solid 2px #000000',
						},
					},
					containedSecondary: {
						border: 'solid 2px #000000',
						'&:hover': {
							backgroundColor: 'rgba(0, 0 ,0, 0.8)',
						},
						'&.Mui-disabled': {
							backgroundColor: 'rgba(0, 0 ,0, 0.1)',
							borderColor: 'rgba(0, 0 ,0, 0.0)',
						},
					},
				},
			},
			MuiAutocomplete: {
				defaultProps: { componentsProps: { paper: { elevation: 4, sx: { borderRadius: 2 } } } },
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						borderRadius: 6,
						backgroundColor: '#ffffff',
						'&.Mui-focused': {
							boxShadow: '0 0 0 3px #cfd5ff, inset 0 0 0 2px #6176f4',
						},
						'&.Mui-error.Mui-focused fieldset': {
							borderColor: 'rgba(0, 0, 0, 0.23)',
						},
						'&.Mui-disabled': {
							backgroundColor: 'rgba(0, 0, 0, 0.06)',
							color: 'rgba(0, 0, 0, 0.6)',
							'& input': {
								WebkitTextFillColor: 'currentColor',
							},
						},
					},
				},
			},
			MuiTooltip: {
				styleOverrides: {
					tooltip: {
						backgroundColor: '#6176f4',
						padding: '24px 32px',
						borderRadius: 8,
						fontSize: 14,
						fontWeight: 600,
						color: '#ffffff',
					},
					arrow: {
						color: '#6176f4',
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					rounded: {
						borderRadius: 20,
					},
				},
			},
			MuiAlert: {
				styleOverrides: {
					outlined: {
						border: 'solid 1px #e0e0e0',
					},
					message: {
						padding: 0,
					},
					icon: {
						padding: 0,
					},
					action: {
						paddingTop: 0,
					},
				},
			},
			MuiDivider: {
				styleOverrides: {
					root: {
						borderColor: '#979797',
					},
					light: {
						borderColor: '#e7e7e7',
					},
				},
			},
			MuiDialogTitle: {
				styleOverrides: {
					root: {
						fontSize: 24,
						fontWeight: 600,
						textAlign: 'center',
						position: 'relative',
					},
				},
			},
			MuiSelect: {
				defaultProps: {
					MenuProps: {
						PaperProps: {
							elevation: 4,
							sx: { borderRadius: 2 },
						},
					},
				},
				styleOverrides: {
					icon: {
						color: '#6176f4',
					},
				},
			},
			MuiTabs: {
				styleOverrides: {
					flexContainer: {
						backgroundColor: '#ffffff',
						marginLeft: 'auto',
						marginRight: 'auto',
						width: 'fit-content',
						padding: 4,
						borderRadius: 8,
					},
					indicator: {
						display: 'none',
					},
				},
			},
			MuiTab: {
				styleOverrides: {
					root: {
						minHeight: 40,
						minWidth: 134,
						borderRadius: 8,
						color: '#3a3a3a',
						textTransform: 'unset',
						fontSize: 14,
						fontWeight: 400,
						'&.Mui-selected': {
							backgroundColor: '#6176f4',
							color: '#ffffff',
							fontWeight: 500,
						},
					},
				},
			},
		},
		palette: {
			mode: 'light',
			grey: {
				'50': '#f6f6f6', // voltaage
				'100': '#e7e7e7', // voltaage
				'200': '#e0e0e0', // voltaage
				'300': '#d8d8d8', // voltage
				'400': '#cfd7e9',
				'500': '#979797', // voltaage
				'600': '#5c5c5c', // voltaage
				'700': '#4e5770',
				'800': '#3a3a3a', // voltaage
				'900': '#2a3042',
			},
			primary: {
				main: '#6176f4', // voltaage
			},
			secondary: {
				main: '#000000', // voltaage
			},
			background: {
				default: '#f8f8fb',
				paper: '#ffffff',
			},
			text: {
				// primary: '#4e5770',
				primary: '#000000',
				secondary: '#556ee6',
			},
			success: {
				main: '#0cca4a', // voltaage
			},
			error: {
				main: '#fb4d3d', // voltaage
				200: '#fedacf',
			},
			warning: {
				main: '#f1b44c',
				900: '#b07512',
				200: '#fcf4e6',
			},
			info: {
				main: '#50a5f1',
			},
		},
		typography: {
			fontSize: 16,
			fontFamily: [
				'Montserrat',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			].join(', '),
			allVariants: {
				fontWeight: 500,
				wordBreak: 'break-word',
			},
			h1: {
				fontSize: 77,
			},
			h2: {
				fontSize: 38,
			},
			h3: {
				fontSize: 34,
			},
			h4: {
				fontSize: 24,
			},
			h5: {
				fontSize: 20,
				fontWeight: 600,
			},
			body1: {
				fontSize: 16,
			},
			body2: {
				fontSize: 14,
			},
			caption: {
				fontSize: 12,
			},
		},
	}),
	{
		contentSize: 'lg',
		extraColors: {
			nightBlue: '#130c45',
			mintGreen: '#c4ebc8',
			ground: '#cb904d',
			pastelRed: '#ef959d',
		},
	}
);
