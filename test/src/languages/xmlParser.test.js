const XMLParser = require('../../../src/languages/xmlParser');

describe('Testing ./src/utils/xmlParser.js', () => {
    test('Testing getParserXMLToJSONOptions()', () => {
        let options = XMLParser.getParserXMLToJSONOptions();
        options.attrValueProcessor('value', 'name');
        options.tagValueProcessor('value', 'name');
        expect(options.attrNodeName).toEqual('@attrs');
    });
    test('Testing getParserJSONToXMLOptions()', () => {
        let options = XMLParser.getParserJSONToXMLOptions();
        options.attrValueProcessor('value');
        options.tagValueProcessor('value');
        expect(options.attrNodeName).toEqual('@attrs');
    });
    test('Testing parseXML()', () => {
        let parsedContent = XMLParser.parseXML(undefined, true);
        expect(parsedContent).toEqual({});
        parsedContent = XMLParser.parseXML('<root><value>xmlValue</value><name>xmlName</name></root>', true);
        expect(parsedContent).toEqual({ root: { value: 'xmlValue', name: 'xmlName' } });
    });
    test('Testing toXML()', () => {
        let result = XMLParser.toXML({ root: { value: 'xmlValue', name: 'xmlName' } });
        expect(result).toEqual('<?xml version="1.0" encoding="UTF-8"?>\n<root>\n\t<value>xmlValue</value>\n\t<name>xmlName</name>\n</root>\n');
        result = XMLParser.toXML({ root: { value: ['xmlValue1', 'xmlValue2'], name: 'xmlName' } });
        expect(result).toEqual('<?xml version="1.0" encoding="UTF-8"?>\n<root>\n\t<value>xmlValue1</value>\n\t<value>xmlValue2</value>\n\t<name>xmlName</name>\n</root>\n');
        result = XMLParser.toXML({ root: { value: [{text:undefined}, {text:'value2'}], name: 'xmlName' } });
        expect(result).toEqual('<?xml version="1.0" encoding="UTF-8"?>\n<root>\n\t<value>\n\t</value>\n\t<value>\n\t\t<text>value2</text>\n\t</value>\n\t<name>xmlName</name>\n</root>\n');
    });
    test('Testing getXMLFirstLine()', () => {
        let result = XMLParser.getXMLFirstLine();
        expect(result).toEqual('<?xml version="1.0" encoding="UTF-8"?>');
    });
    test('Testing startTag()', () => {
        let result = XMLParser.startTag('text', 'tag');
        expect(result).toEqual(undefined);
        result = XMLParser.startTag('text<tag>', 'tag');
        expect(result).toEqual('tag');
    });
    test('Testing endTag()', () => {
        let result = XMLParser.endTag('text', 'tag');
        expect(result).toEqual(undefined);
        result = XMLParser.endTag('text</tag>', 'tag');
        expect(result).toEqual('tag');
    });
    test('Testing getXMLElement()', () => {
        let result = XMLParser.getXMLElement('tag', ['name="value"'], { '#text': 'value' });
        expect(result).toEqual('<tag name="value">value</tag>');
        result = XMLParser.getXMLElement('tag', undefined, 'value');
        expect(result).toEqual('<tag>value</tag>');
        result = XMLParser.getXMLElement('tag', undefined, '{"key":"value"}');
        expect(result).toEqual('<tag>{"key":"value"}</tag>');
        result = XMLParser.getXMLElement('tag', ['name="value"'], '');
        expect(result).toEqual('<tag name="value"/>');
        result = XMLParser.getXMLElement('tag', undefined, '');
        expect(result).toEqual('<tag/>');
    });
    test('Testing getStartTag()', () => {
        let result = XMLParser.getStartTag('tag', ['name="value"'], true);
        expect(result).toEqual('<tag name="value"/>');
        result = XMLParser.getStartTag('tag', ['name="value"'], false);
        expect(result).toEqual('<tag name="value">');
        result = XMLParser.getStartTag('tag', undefined, true);
        expect(result).toEqual('<tag/>');
        result = XMLParser.getStartTag('tag', undefined, false);
        expect(result).toEqual('<tag>');
    });
    test('Testing getEndTag()', () => {
        let result = XMLParser.getEndTag('tag');
        expect(result).toEqual('</tag>');
    });
});