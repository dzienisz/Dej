import { SIGNED_IN } from '../const';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}