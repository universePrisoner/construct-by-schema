import * as React from 'react';

import StyledButton, { TButton as TStyledButton } from '../../spec/Button';
import schemaBorder from '../../styleSchema/border';

export const ButtonSchema = () => ({
	customClasses: ['one-custom', 'two-custom'],
	...schemaBorder(),
});

const KindOfMongooseButtonDefault = {
	type: 'button',
	data: {
		...ButtonSchema(),
	},
	insert: [
		{
			type: 'literal',
			data: 'NoWay',
		},
	],
};

export const useButtonSchema = dataToOverride =>
	React.useState({
		...ButtonSchema(),
		...dataToOverride,
	});

export default function Button({ schema, children }: { schema: TStyledButton; children: React.ReactNode }) {
	return <StyledButton {...schema}>{children}</StyledButton>;
}
