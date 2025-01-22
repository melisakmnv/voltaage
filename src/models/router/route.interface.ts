import { User } from '@services';
import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import { PageType } from './page-type.enum';

export interface IRoute extends RouteObject {
	text?: ReactNode;
	icon?: ReactNode;
	hideFromMenu?: boolean;
	pageType?: PageType;
	children?: IRoute[];
	canActivate?: (route: IRoute, user?: Maybe<User>) => boolean;
}
