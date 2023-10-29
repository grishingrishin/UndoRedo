// @ts-check

/**
 * @typedef {import('../../utils/commands/NullCommand.js').NullCommand} Command
 */

export class StackNode {
    /**
     * @param {Command|null} node
     */
    constructor(node = null) {
        this.node = node;
        this.next = null;
    }

    /**
     * @returns {Command|null}
     */
    getNode() {
        return this.node;
    }

    /**
     * @returns {StackNode|null}
     */
    getNext() {
        return this.next;
    }

    /**
     * @returns {boolean}
     */
    hasNext() {
        return !!this.next;
    }
}
