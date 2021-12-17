export const JSTokenTypes: JSTokenTypesDef = {
    UNKNOWN: "token.type.unknown",
    IDENTIFIER: "token.type.identifier",
    DATATYPE: {
        OBJECT: "datatype.object",
        STRING: "datatype.string",
        VOID: "datatype.void",
        ARRAY: "datatype.array",
        DATE: "datatype.date",
        NUMBER: "datatype.number",
        MATH: "datatype.math",
    },
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
    DECLARATION: {
        ENTITY: {
            CLASS: "declaration.entity.name.class",
            ENUM: "declaration.entity.name.enum",
            INTERFACE: "declaration.entity.name.interface",
            VARIABLE: "declaration.entity.name.variable",
            CONSTANT: "declaration.entity.name.constant",
            FUNCTION: "declaration.entity.name.function",
            CONSTRUCTOR: "declaration.entity.name.constructor",
        }
    },
    ENTITY: {
        VARIABLE: "entity.name.variable",
        FUNCTION: "entity.name.function",
    },
    KEYWORD: {
        FLOW_CONTROL: {
            IF: "keyword.flowcontrol.if",
            SWITCH: "keyword.flowcontrol.switch",
            SWITCH_CASE: "keyword.flowcontrol.switch.case",
            ELSE_IF: "keyword.flowcontrol.elseif",
            ELSE: "keyword.flowcontrol.else",
            BREAK: "keyword.flowcontrol.break",
            CONTINUE: "keyword.flowcontrol.continue",
            RETURN: "keyword.flowcontrol.return",
            TRY: "keyword.flowcontrol.try",
            CATCH: "keyword.flowcontrol.catch",
            FINALLY: "keyword.flowcontrol.finally",
            DO: "keyword.flowcontrol.do",
            FOR: "keyword.flowcontrol.for",
            WHILE: "keyword.flowcontrol.while",
            WHILE_DO: "keyword.flowcontrol.while.do",
            THROW: "keyword.flowcontrol.throw"
        },
        DECLARATION: {
            CLASS: "keyword.declaration.class",
            INTERFACE: "keyword.declaration.interface",
            ENUM: "keyword.declaration.enum",
            EXTENDS: "keyword.declaration.extends",
            IMPLEMENTS: "keyword.declaration.implements",
            VARIABLE: "keyword.declaration.variable",
            CONSTANT: "keyword.declaration.constant",
            FUNCTION: "keyword.declaration.function",
            CONSTRUCTOR: "keyword.declaration.constructor",
        },
        MODIFIER: {
            DEFINITION: "keyword.modifier.definition",
            ACCESS: "keyword.modifier.access",
            FINAL: "keyword.modifier.final",
            OVERRIDE: "keyword.modifier.override",
            STATIC: "keyword.modifier.static",
            TEST_METHOD: "keyword.modifier.testmethod",
            WEB_SERVICE: "keyword.modifier.webservice",
            SHARING: "keyword.modifier.sharing",
            TRANSIENT: "keyword.modifier.transient"
        },
        OBJECT: {
            NEW: "keyword.object.new",
            THIS: "keyword.object.this",
            SUPER: "keyword.object.super",
            TYPEOF: "keyword.object.typeof",
            PROTOTYPE: "keyword.object.prototype"
        },
        OTHER: "keyword.other",
        PREDEFINED_OBJECT: "keyword.predefined.object",
        FOR_FUTURE: "keyword.other.future.use"
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
        PARENTHESIS_PARAM_OPEN: "bracket.parenthesis.params.open",
        PARENTHESIS_PARAM_CLOSE: "bracket.parenthesis.params.close",
        PARENTHESIS_DECLARATION_PARAM_OPEN: "bracket.parenthesis.declaration.params.open",
        PARENTHESIS_DECLARATION_PARAM_CLOSE: "bracket.parenthesis.declaration.params.close",
        PARENTHESIS_GUARD_OPEN: "bracket.parenthesis.guard.open",
        PARENTHESIS_GUARD_CLOSE: "bracket.parenthesis.guard.close",
    },
    COMMENT: {
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
            ASSIGN: "operator.assign"
        },
    }
};

export interface JSTokenTypesDef {
    UNKNOWN: string;
    IDENTIFIER: string;
    DATATYPE: {
        OBJECT: string;
        STRING: string;
        VOID: string;
        ARRAY: string;
        DATE: string;
        NUMBER: string;
        MATH: string;
    },
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
    DECLARATION: {
        ENTITY: {
            CLASS: string;
            ENUM: string;
            INTERFACE: string;
            VARIABLE: string;
            CONSTANT: string;
            FUNCTION: string;
            CONSTRUCTOR: string;
        }
    },
    ENTITY: {
        VARIABLE: string;
        FUNCTION: string;
    },
    KEYWORD: {
        FLOW_CONTROL: {
            IF: string;
            SWITCH: string;
            SWITCH_CASE: string;
            ELSE_IF: string;
            ELSE: string;
            BREAK: string;
            CONTINUE: string;
            RETURN: string;
            TRY: string;
            CATCH: string;
            FINALLY: string;
            DO: string;
            FOR: string;
            WHILE: string;
            WHILE_DO: string;
            THROW: string;
        },
        DECLARATION: {
            CLASS: string;
            INTERFACE: string;
            ENUM: string;
            EXTENDS: string;
            IMPLEMENTS: string;
            VARIABLE: string;
            CONSTANT: string;
            FUNCTION: string;
            CONSTRUCTOR: string;
        },
        MODIFIER: {
            DEFINITION: string;
            ACCESS: string;
            FINAL: string;
            OVERRIDE: string;
            STATIC: string;
            TEST_METHOD: string;
            WEB_SERVICE: string;
            SHARING: string;
            TRANSIENT: string;
        },
        OBJECT: {
            NEW: string;
            THIS: string;
            SUPER: string;
            TYPEOF: string;
            PROTOTYPE: string;
        },
        OTHER: string;
        PREDEFINED_OBJECT: string;
        FOR_FUTURE: string;
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
        PARENTHESIS_PARAM_OPEN: string;
        PARENTHESIS_PARAM_CLOSE: string;
        PARENTHESIS_DECLARATION_PARAM_OPEN: string;
        PARENTHESIS_DECLARATION_PARAM_CLOSE: string;
        PARENTHESIS_GUARD_OPEN: string;
        PARENTHESIS_GUARD_CLOSE: string;
    },
    COMMENT: {
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
            ASSIGN: string;
        },
    }
};