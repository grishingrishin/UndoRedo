// @ts-check

import { Stack } from './libs/Stack/Stack.js';

/**
 * @typedef {import('./utils/commands/NullCommand.js').NullCommand} Command
 */

export class UndoRedo {
    constructor() {
        this.undos = new Stack();
        this.redos = new Stack();
    }

    /**
     * @param {Command} command
     */
    record(command) {
        if (
            this.validateCommand(command) &&
            command.execute()
        ) {
            this.undos.clear();
            this.redos.push(command);
        }
    }

    undo() {
        if (
            this.hasRedos() &&
            this.redos.peak()?.getNode()?.undo()
        ) {
            this.undos.push(this.redos.pop()?.getNode());
        }
    }

    redo() {
        if (
            this.hasUndos() &&
            this.undos.peak()?.getNode()?.execute()
        ) {
            this.redos.push(this.undos.pop()?.getNode());
        }
    }

    /**
     * @returns {boolean}
     */
    hasRedos() {
        return !!this.redos.peak();
    }

    /**
     * @returns {boolean}
     */
    hasUndos() {
        return !!this.undos.peak();
    }

    /**
     * @returns {boolean}
     */
    validateCommand(command) {
        return !!(command?.execute && command?.undo);
    }
}
