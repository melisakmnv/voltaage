import { FC } from "react"

interface NextIconProps {
	color: string
	borderColor: string,
}

export const NextIcon: FC<NextIconProps> = ({ color, borderColor }) => {

	return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 7L15 12L10 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<rect x="1" y="1" width="22" height="22" rx="11" stroke={borderColor} strokeWidth="2" />
	</svg>
}
