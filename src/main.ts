import { pluginName } from '../package.json';
import { PluginManager, $dataSystem } from 'rmmz';

/**
 * Returns a greeting using the current game title.
 *
 * @returns A friendly message with the game title
 * @example
 * sayHi(); // "Hello My Awesome Game!"
 */
export function sayHi(): string {
    return `Hello ${$dataSystem.gameTitle}!`;
}

/**
 * Register the sayHi command with the plugin manager.
 */
PluginManager.registerCommand(pluginName, 'sayHi', sayHi);
