import { FC } from 'react';
import { useLoggedinUser } from '@hooks';
import { Avatar, Stack, Typography } from '@mui/material';

export const UserInfo: FC = () => {
	const user = useLoggedinUser();

	return (
		<Stack direction="column" alignItems="center" spacing={1}>
			{user ? (
				<>
					<Avatar sx={{ backgroundColor: 'primary.main', width: 64, height: 64 }}>{user.getAvatarLetters?.()}</Avatar>
					<Typography>{(user.name && user.surname ? `${user.name} ${user.surname[0]}.` : user.email) || ''}</Typography>
				</>
			) : null}
		</Stack>
	);
};
