import {  ApexDeclarationNode, Token } from "../../types";

describe('Testing ./src/types/apexDeclarationNode.js', () => {
    test('Testing instance', () => {
        const apexDeclarationNode = new ApexDeclarationNode('id', 'type', 'name', new Token('type', 'text', 1, 0, false));
        apexDeclarationNode.getAbosluteFirstChild();
        apexDeclarationNode.getAbsoluteLastChild();
        apexDeclarationNode.getChildOrder();
        apexDeclarationNode.getFirstChild();
        apexDeclarationNode.getLastChild();
        apexDeclarationNode.addChild();
        apexDeclarationNode.getOrderedChilds();
        expect(apexDeclarationNode.id).toMatch('id');
        expect(apexDeclarationNode.name).toMatch('name');
        expect(apexDeclarationNode.nodeType).toMatch('type');
        const apexDeclarationNode2 = new ApexDeclarationNode(apexDeclarationNode);
        expect(apexDeclarationNode2.id).toMatch('id');
        expect(apexDeclarationNode2.name).toMatch('name');
        expect(apexDeclarationNode2.nodeType).toMatch('type');
    });
});