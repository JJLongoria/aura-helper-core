const parser = require('fast-xml-parser');
var he = require('he');

class XMLParser {

    static getParserXMLToJSONOptions() {
        return {
            attributeNamePrefix: "",
            attrNodeName: "@attrs", //default is 'false'
            textNodeName: "#text",
            ignoreAttributes: false,
            ignoreNameSpace: false,
            allowBooleanAttributes: true,
            parseNodeValue: true,
            parseAttributeValue: false,
            trimValues: true,
            cdataTagName: "__cdata", //default is 'false'
            cdataPositionChar: "\\c",
            localeRange: "", //To support non english character in tag/attribute values.
            parseTrueNumberOnly: false,
            arrayMode: false, //"strict"
            attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),//default is a=>a
            tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
            stopNodes: ["parse-me-as-string"]
        };
    }

    static getParserJSONToXMLOptions() {
        return {
            attributeNamePrefix: "",
            attrNodeName: "@attrs", //default is false
            textNodeName: "#text",
            ignoreAttributes: false,
            cdataTagName: "__cdata", //default is false
            cdataPositionChar: "\\c",
            format: true,
            indentBy: "\t",
            supressEmptyNode: false,
            tagValueProcessor: a => he.encode(a, { useNamedReferences: true }),// default is a=>a
            attrValueProcessor: a => he.encode(a, { useNamedReferences: true })// default is a=>a
        };
    }

    static parseXML(content, parseComments) {
        if (content && content.length > 0) {
            if (parseComments) {
                content = content.split('<!--').join('«!--');
                content = content.split('-->').join('--»');
            }
            return parser.parse(content, XMLParser.getParserXMLToJSONOptions());
        }
        return {};
    }

    static toXML(jsonObj) {
        jsonObj = fixObjValues(jsonObj);
        let xmlParser = new parser.j2xParser(XMLParser.getParserJSONToXMLOptions());
        let content = xmlParser.parse(jsonObj);
        content = XMLParser.getXMLFirstLine() + '\n' + content;
        return content;
    }

    static getXMLFirstLine() {
        return '<?xml version="1.0" encoding="UTF-8"?>';
    }

    static startTag(text, tag) {
        if (text.indexOf('<' + tag + '>') !== -1)
            return tag;
        return undefined;
    }

    static endTag(text, tag) {
        if (text.indexOf('</' + tag + '>') !== -1)
            return tag;
        return undefined;
    }

    static getXMLElement(tag, attributes, value) {
        let empty = value === undefined || value === null || value === '';
        if(value['#text']){
            value = value['#text'];
        }
        let isJSONValue;
        if (empty)
            return XMLParser.getStartTag(tag, attributes, empty);
        else {
            try {
                let jsonVal = JSON.parse(value);
                if (jsonVal)
                    isJSONValue = true
                else
                    isJSONValue = false;
            } catch (error) {
                isJSONValue = false;
            }
            if (typeof value === 'string' && !isJSONValue) {
                value = escapeChars(value);
            }
            return XMLParser.getStartTag(tag, attributes, empty) + value + XMLParser.getEndTag(tag);
        }
    }

    static getStartTag(tag, attributes, empty) {
        if (!empty) {
            if (attributes && attributes.length > 0)
                return '<' + tag.trim() + ' ' + attributes.join(' ') + '>';
            else
                return '<' + tag.trim() + '>';
        } else {
            if (attributes && attributes.length > 0)
                return '<' + tag.trim() + ' ' + attributes.join(' ') + '/>';
            else
                return '<' + tag.trim() + '/>';
        }
    }

    static getEndTag(tag) {
        return '</' + tag.trim() + '>';
    }

}
module.exports = XMLParser;

function escapeChars(value) {
    if (typeof value === "string") {
        value = value.split('&amp;').join('&');
        value = value.split('&quot;').join('"');
        value = value.split('&apos;').join('\'');
        value = value.split('&lt;').join('<');
        value = value.split('&gt;').join('>');

        value = value.split('«!--').join('<!--');
        value = value.split('--»').join('-->');
        value = value.split('&').join('&amp;');
        value = value.split('"').join('&quot;');
        value = value.split('\'').join('&apos;');
        if (value.indexOf('<!') === -1) {
            value = value.split('<').join('&lt;');
            value = value.split('>').join('&gt;');
        }
    }
    return value;
}

function fixObjValues(jsonObj) {
    let jsonRes = {};
    Object.keys(jsonObj).forEach(function (key) {
        let value = jsonObj[key];
        if (Array.isArray(value)) {
            jsonRes[key] = fixArrayValues(value);
        } else if (typeof value === 'object') {
            jsonRes[key] = fixObjValues(value);
        } else {
            if (value !== undefined)
                jsonRes[key] = value.toString();
            else
                jsonRes[key] = value;
        }
    });
    return jsonRes;
}

function fixArrayValues(jsonArray) {
    let arrayRes = [];
    for (const element of jsonArray) {
        if (Array.isArray(element)) {
            arrayRes.push(fixArrayValues(element));
        } else if (typeof element === 'object') {
            arrayRes.push(fixObjValues(element));
        } else {
            arrayRes.push(element.toString());
        }
    }
    return arrayRes;
}