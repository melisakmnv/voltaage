import { FC } from 'react';
// import { SvgIcon, SvgIconProps } from '@mui/material';
// import { ReactComponent as IconComponent } from '../../assets/Info-Icon.svg';



// export const InfoIcon: FC<SvgIconProps> = ({ sx, ...rest }) => {
//     const { width = 32, height = 32, color = "white",} = rest;
//     return <SvgIcon component={IconComponent} sx={{ width, height, color, ...sx }} viewBox={`0 0 ${width} ${height}`} {...rest} stroke={color} />;
// };


interface InfoIconProps {
    size?: number,
    color?: string
}

export const InfoIcon: FC<InfoIconProps> = ({ color, size }) => {
    return (
        <>
            <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3V3.6" stroke={color} strokeLinecap="round" />
                <path d="M6 6.5V8.9" stroke={color} strokeLinecap="round" />
                <rect x="0.5" y="0.5" width="11" height="11" rx="5.5" stroke={color} />
            </svg>
        </>
    )
}


// width , height, color, stroke


// <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="8" cy="8" r="7" stroke="#242424" stroke-width="2"/>
// <path d="M7.23409 11V6.664H8.75409V11H7.23409ZM7.99409 6.184C7.71676 6.184 7.49276 6.10667 7.32209 5.952C7.15143 5.79733 7.06609 5.60533 7.06609 5.376C7.06609 5.14667 7.15143 4.95467 7.32209 4.8C7.49276 4.64533 7.71676 4.568 7.99409 4.568C8.27143 4.568 8.49543 4.64267 8.66609 4.792C8.83676 4.936 8.92209 5.12267 8.92209 5.352C8.92209 5.592 8.83676 5.792 8.66609 5.952C8.50076 6.10667 8.27676 6.184 7.99409 6.184Z" fill="#242424"/>
// </svg>



