// @ts-check

/**
 * @see https://ru.wikipedia.org/wiki/Null_object_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
 */
export class NullCommand {
    /**
     * @param {Object} entity
     * @param {Object} payload
     */
    constructor(entity = {}, payload = {}) {
        this.entity = entity;
        this.payload = payload;
    }

    /**
     * @returns {boolean}
     */
    execute() {
        return false;
    }

    /**
     * @returns {boolean}
     */
    undo() {
        return false;
    }
}
