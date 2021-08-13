class Utils {

    static forceArray(data) {
        if (data === undefined)
            return data;
        return (Array.isArray(data)) ? data : [data];
    }

    static clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    static isObject(value) {
        return !Utils.isArray(value) && typeof value === 'object';
    }

    static isString(value) {
        return !Utils.isNull(value) && typeof value === 'string';
    }

    static isNumber(value) {
        return !Utils.isNull(value) && typeof value === 'number';
    }

    static isBigInt(value) {
        return !Utils.isNull(value) && typeof value === 'bigint';
    }

    static isSymbol(value) {
        return !Utils.isNull(value) && typeof value === 'symbol';
    }

    static isBoolean(value) {
        return !Utils.isNull(value) && typeof value === 'boolean';
    }

    static isFunction(value) {
        return !Utils.isNull(value) && typeof value === 'function';
    }

    static isArray(value) {
        return !Utils.isNull(value) && Array.isArray(value);
    }

    static isNull(value) {
        return value === undefined || value === null;
    }

    static hasKeys(value) {
        return !Utils.isNull(value) && Utils.isObject(value) && Object.keys(value).length > 0;
    }

    static countKeys(value) {
        return (Utils.hasKeys(value)) ? Object.keys(value).length : 0;
    }

    static getFirstElement(value) {
        return (Utils.hasKeys(value)) ? value[Object.keys(value)[0]] : 0;
    }

    static getLastElement(value) {
        return (Utils.hasKeys(value)) ? value[Object.keys(value)[Object.keys(value).length - 1]] : 0;
    }

    static getCallbackFunction(args) {
        if (Utils.isNull(args) || args.length == 0)
            return undefined;
        for (let i = 0; i < args.length; i++) {
            if (Utils.isFunction(args[i]))
                return args[i];
        }
        return undefined;
    }

    static sort(elements, fields, caseSensitive) {
        if (Array.isArray(elements)) {
            elements.sort(function (a, b) {
                if (fields && fields.length > 0) {
                    let nameA = '';
                    let nameB = '';
                    let counter = 0;
                    for (const field of fields) {
                        let valA = (a[field] !== undefined) ? a[field] : "";
                        let valB = (b[field] !== undefined) ? b[field] : "";
                        if (counter == 0) {
                            nameA = valA;
                            nameB = valB;
                        } else {
                            nameA += '_' + valA;
                            nameB += '_' + valB;
                        }
                        counter++;
                    }
                    if (caseSensitive) {
                        return nameA.localeCompare(nameB);
                    } else {
                        return nameA.toLowerCase().localeCompare(nameB.toLowerCase());
                    }
                } else {
                    if (caseSensitive) {
                        return a.localeCompare(b);
                    } else {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    }
                }
            });
        }
        return elements;
    }
}
module.exports = Utils;