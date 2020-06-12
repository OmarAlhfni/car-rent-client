import { COMPONENT_SWITCH } from './types';

export const displayComponent = compName => ({type: COMPONENT_SWITCH, payload: compName})
