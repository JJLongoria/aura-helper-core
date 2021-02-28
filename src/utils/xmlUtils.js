const Datatypes = require('../values/datatypes');

class XMLUtils {

    static createXMLFile(xmlMetadata) {
        let result = {};
        Object.keys(xmlMetadata).forEach(function (xmlField) {
            let elementData = xmlMetadata[xmlField];
            if (elementData.datatype === Datatypes.ARRAY) {
                result[xmlField] = [];
            } else if (elementData.datatype === Datatypes.OBJECT) {
                result[xmlField] = {};
            } else {
                result[xmlField] = undefined;
            }
        });
        return result;
    }

    static prepareXML(source, target) {
        Object.keys(target).forEach(function (key) {
            if (source[key] !== undefined) {
                if (Array.isArray(target[key])) {
                    target[key] = XMLUtils.forceArray(source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        });
        if (source['@attrs'])
            target['@attrs'] = source['@attrs'];
        return target;
    }

    static forceArray(element) {
        let result = [];
        if (element !== undefined) {
            if (Array.isArray(element))
                result = element;
            else
                result.push(element);
        }
        return result;
    }

    static sort(elements, fields) {
        if (Array.isArray(elements)) {
            elements.sort(function (a, b) {
                if (fields && fields.length > 0) {
                    let nameA = '';
                    let nameB = '';
                    let counter = 0;
                    for (const iterator of fields) {
                        let valA = (a[iterator] !== undefined) ? a[iterator] : "";
                        let valB = (b[iterator] !== undefined) ? b[iterator] : "";
                        if (counter == 0) {
                            nameA = valA;
                            nameB = valB;
                        } else {
                            nameA += '_' + valA;
                            nameB += '_' + valB;
                        }
                        counter++;
                    }
                    return nameA.toLowerCase().localeCompare(nameB.toLowerCase());
                } else {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                }
            });
        }
    }

    static getAttributes(data) {
        let attributes = [];
        if (data['@attrs'] !== undefined) {
            Object.keys(data['@attrs']).forEach(function (key) {
                attributes.push(key + '="' + data['@attrs'][key] + '"');
            });
        }
        return attributes;
    }

    static getText(data) {
        let text = undefined;
        if (data['#text'] !== undefined)
            text = data['#text'];
        return text;
    }

    static getTabs(nTabs) {
        let tabs = '';
        for (let i = 0; i < nTabs; i++) {
            tabs += '\t';
        }
        return tabs;
    }

}
module.exports = XMLUtils;