import React from 'react';
import styled from 'styled-components';

import { createBorderStyles, TBorder } from '../../styleSchema/border';

/**
 * Button component properties
 * @border {@link TBorder}
 * @children React Node and all possible values for ReactNode
 */
export type TButton = {
	children: React.ReactNode;
	border: TBorder;
};

const StyledButton = styled.button`
	${({ border }: { border: TBorder }) => createBorderStyles(border)}
`;

export default function Button({ children, border }: TButton) {
	return <StyledButton border={border}>{children}</StyledButton>;
}
