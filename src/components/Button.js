import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { colors } from '../utils/colors.js';
import { typographies } from '../utils/typographies';

const BUTTON_MODIFIERS = {
	small: () => `
    font-size:14px;
    padding:7px;
    `,
	large: () => `
    font-size:20px;
    padding:20px;
    `,
	warning: () => `
    background-color:yellow;
    color:black;
    `,
};
const Button = styled.button`
	border-radius: 10px;
	padding: 12px 24px;
	min-width: 100px;
	border: none;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-size: ${typographies.paragraph};
	&:hover {
		background: ${colors.lavenderWeb};
		color: ${colors.primary};
	}
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const PrimaryButton = styled(Button)`
	background: ${colors.primary};
	color: ${colors.white};
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
	background: transparent;
	color: ${colors.lavenderWeb};
	border: 1px solid ${colors.lavenderWeb};
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
