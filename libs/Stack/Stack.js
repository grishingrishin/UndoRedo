// @ts-check

import { StackNode } from './StackNode.js';

/**
 * @typedef {import('../../utils/commands/NullCommand.js').NullCommand} Command
 */

export class Stack {
    /**
     * @param {StackNode|null} node
     */
    constructor(node = null) {
        this.head = node;
        this.size = 0;
    }

    /**
     * @param {Command|null} command
     * @returns {StackNode}
     */
    push(command = null) {
        const newNode = new StackNode(command);

        if (this.head) {
            const tmp = this.head;
            this.head = newNode;
            this.head.next = tmp;
            this.size++;
        } else {
            this.head = newNode;
            this.size++;
        };

        return newNode;
    }

    /**
     * @returns {StackNode|null}
     */
    pop() {
        if (!this.head) return null;
        const tmp = this.head;
        this.head = this.head.next;
        this.size--;
        return tmp;
    }

    /**
     * @returns {Stack}
     */
    clear() {
        this.head = null;
        this.size = 0;
        return this;
    }

    /**
     * @returns {StackNode|null}
     */
    peak() {
        return this.head;
    }
}
