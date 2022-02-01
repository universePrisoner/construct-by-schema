/**
 * Description of each side of the CSS alike border property
 * @width can apply px, em etc.
 * @style normal, dashed, solid
 * @color HEX, HSL, RGB, RGBA
 */
export type TBorderSide = {
	width: string;
	style: string;
	color: string;
};

/**
 * Describe base values of the border CSS property
 * @left {@link TBorderSide}
 * @right {@link TBorderSide}
 * @top {@link TBorderSide}
 * @bottom {@link TBorderSide}
 */
export type TBorder = Record<'left' | 'right' | 'top' | 'bottom', TBorderSide>;

/**
 * @description
 * Generate plain string with CSS values.
 * @param border {@link TBorder}
 * @returns {string}
 * ```css
 * border-width: Npx Npx Npx Npx;
 * border-style: leftStyle topStyle rightStyle bottomStyle;
 * border-color: leftColor topColor rightColor bottomColor
 * ```
 */
export const createBorderStyles = (border: TBorder) => {
	const { left, right, top, bottom } = border;

	const [w1, w2, w3, w4] = [left.width, right.width, top.width, bottom.width].map(w => {
		const numberW = parseInt(w, 10);

		return numberW ? `${numberW}px` : w;
	});

	return `
		border-width: ${w1} ${w2} ${w3} ${w4};
		border-style: ${left.style} ${top.style} ${right.style} ${bottom.style};
		border-color: ${left.color} ${top.color} ${right.color} ${bottom.color};
	`;
};

export default function schemaBorder() {
	const defaultSideSchema: TBorderSide = {
		width: 'medium',
		style: 'none',
		color: 'currentColor',
	};

	const sideSchema = (schema = defaultSideSchema) => ({
		width: schema.width,
		style: schema.style,
		color: schema.color,
	});

	return {
		border: {
			left: sideSchema(),
			top: sideSchema(),
			right: sideSchema(),
			bottom: sideSchema(),
		},
	};
}
