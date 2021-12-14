export const TokenTypes: TokenTypes = {
    UNKNOWN: "token.type.unknown",
    IDENTIFIER: "token.type.identifier",
    LITERAL: {
        DATE: "literal.date",
        DATE_PARAMETRIZED: "literal.date.parametrized",
        DATE_PARAMETRIZED_START_PARAM: "literal.date.parametrized.start.param",
        BOOLEAN: "literal.boolean",
        NULL: "literal.null",
        UNDEFINED: "literal.undefined",
        NAN: "literal.nan",
        INFINITY: "literal.infinity",
        DATETIME: "literal.datetime",
        TIME: "literal.time",
        DOUBLE: "literal.double",
        DOUBLE_INDICATOR: "literal.double.indicator",
        INTEGER: "literal.number",
        STRING: "literal.string",
        LONG: "literal.long",
        LONG_INDICATOR: "literal.long.indicator",
    },
    PUNCTUATION: {
        COMMA: "punctuation.comma",
        COLON: "punctuation.colon",
        SEMICOLON: "punctuation.semicolon",
        OBJECT_ACCESSOR: "punctuation.object.accessor",
        SAFE_OBJECT_ACCESSOR: "punctuation.safe.object.accessor",
        BACKSLASH: "punctuation.backslash",
        QUOTTES: "punctuation.quottes",
        QUOTTES_START: "punctuation.quottes.start",
        QUOTTES_END: "punctuation.quottes.end",
        DOUBLE_QUOTTES: "punctuation.double.quottes",
        DOUBLE_QUOTTES_START: "punctuation.double.quottes.start",
        DOUBLE_QUOTTES_END: "punctuation.double.quottes.end",
        AT: "puctuation.at",
        EXMARK: "puctuation.exmark",
    },
    BRACKET: {
        CURLY_OPEN: "bracket.curly.open",
        CURLY_CLOSE: "bracket.curly.close",
        SQUARE_OPEN: "bracket.square.open",
        SQUARE_CLOSE: "bracket.square.close",
    },
    COMMENT: {
        XML_START: "comment.xml.start",
        XML_END: "comment.xml.end",
        BLOCK_START: "comment.block.start",
        BLOCK_END: "comment.block.end",
        LINE: "comment.line.double-slash",
        LINE_DOC: "comment.line.triple-slash",
        CONTENT: "comment.content",
    },
    OPERATOR: {
        PRIORITY: {
            PARENTHESIS_OPEN: "operator.parenthesis.open",
            PARENTHESIS_CLOSE: "operator.parenthesis.close"
        },
        BITWISE: {
            UNSIGNED_RIGHT_ASSIGN: "operator.bitwise.unsigned.right.assign",
            SIGNED_RIGTH_ASSIGN: "operator.bitwise.signed.right.assign",
            LEFT_ASSIGN: "operator.bitwise.left.assign",
            UNSIGNED_RIGHT: "operator.bitwise.unsigned.right",
            SIGNED_RIGHT: "operator.bitwise.signed.right",
            SIGNED_LEFT: "operator.bitwise.signed.left",
            EXCLUSIVE_OR_ASSIGN: "operator.bitwise.exclusive.or.assign",
            EXCLUSIVE_OR: "operator.bitwise.exclusive.or",
            OR: "operator.bitwise.or",
            AND: "operator.bitwise.and",
        },
        LOGICAL: {
            INEQUALITY_EXACT: "operator.logical.inequality.exact",
            EQUALITY_EXACT: "operator.logical.equality.exact",
            INEQUALITY: "operator.logical.inequality",
            EQUALITY: "operator.logical.equality",
            OR: "operator.logical.or",
            OR_ASSIGN: "operator.logical.or.assign",
            AND: "operator.logical.and",
            AND_ASSIGN: "operator.logical.and.assign",
            GREATER_THAN_EQUALS: "operator.logical.greaterthan.equals",
            LESS_THAN_EQUALS: "operator.logical.lessthan.equals",
            NOT: "operator.logical.not",
            GREATER_THAN: "operator.logical.greaterthan",
            LESS_THAN: "operator.logical.lessthan",
            INSTANCE_OF: "operator.logical.instanceof",
        },
        ARITHMETIC: {
            DECREMENT: "operator.arithmetic.decrement",
            INCREMENT: "operator.arithmetic.increment",
            ADD_ASSIGN: "operator.arithmetic.add.assign",
            SUBSTRACT_ASSIGN: "operator.arithmetic.substract.assign",
            MULTIPLY_ASSIGN: "operator.arithmetic.multiply.assign",
            DIVIDE_ASSIGN: "operator.arithmetic.divide.assign",
            ADD: "operator.arithmetic.add",
            POSITIVE: "operator.arithmetic.positive",
            SUBSTRACT: "operator.arithmetic.substract",
            NEGATIVE: "operator.arithmetic.negative",
            MULTIPLY: "operator.arithmetic.multiply",
            DIVIDE: "operator.arithmetic.divide",
            PARENTHESIS_OPEN: "operator.parenthesis.open",
            PARENTHESIS_CLOSE: "operator.parenthesis.close",
        },
        ASSIGN: {
            MAP_KEY_VALUE: "operator.assign.map.key.value",
            ASSIGN: "operator.assign"
        },
    }
};

interface TokenTypes {
    UNKNOWN: string;
    IDENTIFIER: string;
    LITERAL: {
        DATE: string;
        DATE_PARAMETRIZED: string;
        DATE_PARAMETRIZED_START_PARAM: string;
        BOOLEAN: string;
        NULL: string;
        UNDEFINED: string;
        NAN: string;
        INFINITY: string;
        DATETIME: string;
        TIME: string;
        DOUBLE: string;
        DOUBLE_INDICATOR: string;
        INTEGER: string;
        STRING: string;
        LONG: string;
        LONG_INDICATOR: string;
    },
    PUNCTUATION: {
        COMMA: string;
        COLON: string;
        SEMICOLON: string;
        OBJECT_ACCESSOR: string;
        SAFE_OBJECT_ACCESSOR: string;
        BACKSLASH: string;
        QUOTTES: string;
        QUOTTES_START: string;
        QUOTTES_END: string;
        DOUBLE_QUOTTES: string;
        DOUBLE_QUOTTES_START: string;
        DOUBLE_QUOTTES_END: string;
        AT: string;
        EXMARK: string;
    },
    BRACKET: {
        CURLY_OPEN: string;
        CURLY_CLOSE: string;
        SQUARE_OPEN: string;
        SQUARE_CLOSE: string;
    },
    COMMENT: {
        XML_START: string;
        XML_END: string;
        BLOCK_START: string;
        BLOCK_END: string;
        LINE: string;
        LINE_DOC: string;
        CONTENT: string;
    },
    OPERATOR: {
        PRIORITY: {
            PARENTHESIS_OPEN: string;
            PARENTHESIS_CLOSE: string;
        },
        BITWISE: {
            UNSIGNED_RIGHT_ASSIGN: string;
            SIGNED_RIGTH_ASSIGN: string;
            LEFT_ASSIGN: string;
            UNSIGNED_RIGHT: string;
            SIGNED_RIGHT: string;
            SIGNED_LEFT: string;
            EXCLUSIVE_OR_ASSIGN: string;
            EXCLUSIVE_OR: string;
            OR: string;
            AND: string;
        },
        LOGICAL: {
            INEQUALITY_EXACT: string;
            EQUALITY_EXACT: string;
            INEQUALITY: string;
            EQUALITY: string;
            OR: string;
            OR_ASSIGN: string;
            AND: string;
            AND_ASSIGN: string;
            GREATER_THAN_EQUALS: string;
            LESS_THAN_EQUALS: string;
            NOT: string;
            GREATER_THAN: string;
            LESS_THAN: string;
            INSTANCE_OF: string;
        },
        ARITHMETIC: {
            DECREMENT: string;
            INCREMENT: string;
            ADD_ASSIGN: string;
            SUBSTRACT_ASSIGN: string;
            MULTIPLY_ASSIGN: string;
            DIVIDE_ASSIGN: string;
            ADD: string;
            POSITIVE: string;
            SUBSTRACT: string;
            NEGATIVE: string;
            MULTIPLY: string;
            DIVIDE: string;
            PARENTHESIS_OPEN: string;
            PARENTHESIS_CLOSE: string;
        },
        ASSIGN: {
            MAP_KEY_VALUE: string;
            ASSIGN: string;
        },
    }
};