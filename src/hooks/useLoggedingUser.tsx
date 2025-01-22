import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { User } from '@services';
import { TypeUtils } from '@utils';
import { loggedinUserSelector } from '@store/slices/common.slice';

export const useLoggedinUser = (): Maybe<User> => {
	const loggedinUser = useSelector(loggedinUserSelector);
	const [user, setUser] = useState<Maybe<User>>();

	useEffect(() => {
		setUser(loggedinUser ? TypeUtils.convert(User, loggedinUser) : undefined);
	}, [loggedinUser]);

	return user;
};
