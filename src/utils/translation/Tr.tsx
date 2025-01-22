import { StringMap, TOptions } from 'i18next';
import { FC } from 'react';
import { Translation } from 'react-i18next';

interface ITrProps {
	path: string;
	options?: string | TOptions<StringMap>;
}

export enum Namespaces {
	Common = 'Common',
	Portal = 'Portal'
}

export const Tr: Record<Namespaces, FC<ITrProps>> = {
	[Namespaces.Common]: ({ path, options }) => <Translation ns="common">{(t) => t(path, options)}</Translation>,
	[Namespaces.Portal]: ({ path, options }) => <Translation ns="portal">{(t) => t(path, options)}</Translation>
};
