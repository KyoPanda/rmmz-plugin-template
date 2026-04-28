import * as rmmz from 'rmmz';

/**
 * Returns a greeting using the current game title.
 *
 * @returns A friendly message with the game title
 * @example
 * sayHi(); // "Hello My Awesome Game!"
 */
export function sayHi(): string {
    return `Hello ${rmmz.$dataSystem.gameTitle}!`;
}

/**
 * Example Plugin Command
 */
export const pluginCommands = {
    sayHi: sayHi,
};
