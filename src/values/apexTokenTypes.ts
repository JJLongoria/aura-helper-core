export const ApexTokenTypes: ApexTokenTypesDef = {
    UNKNOWN: "token.type.unknown",
    IDENTIFIER: "token.type.identifier",
    ANNOTATION: {
        ENTITY: "annotation.entity",
        NAME: "annotation.name",
        CONTENT: "annotation.content"
    },
    DATATYPE: {
        PRIMITIVE: "datatype.primitive",
        COLLECTION: "datatype.collection",
        SOBJECT: "datatype.support.sobject",
        CUSTOM_CLASS: "datatype.custom.class",
        SUPPORT_CLASS: "datatype.support.class",
        SUPPORT_NAMESPACE: "datatype.support.namespace",
    },
    LITERAL: {
        DATE: "literal.date",
        DATE_PARAMETRIZED: "literal.date.parametrized",
        DATE_PARAMETRIZED_START_PARAM: "literal.date.parametrized.start.param",
        DATE_PARAMETRIZED_PARAM_VARIABLE: "literal.date.parametrized.param.variable",
        BOOLEAN: "literal.boolean",
        NULL: "literal.null",
        DATETIME: "literal.datetime",
        TIME: "literal.time",
        DOUBLE: "literal.double",
        DOUBLE_INDICATOR: "literal.double.indicator",
        INTEGER: "literal.number",
        STRING: "literal.string",
        LONG: "literal.long",
        LONG_INDICATOR: "literal.long.indicator"
    },
    QUERY: {
        ORDER: "keyword.query.order",
        CLAUSE: {
            SELECT: "query.clause.select",
            FIND: "query.clause.find",
            USING_SCOPE: "query.clause.scope",
            ORDER_BY: "query.clause.orderby",
            WHERE: "query.clause.where",
            WHEN: "query.clause.when",
            TYPE_OF: "query.clause.typeof",
            THEN: "query.clause.then",
            NULLS: "query.clause.nulls",
            FROM: "query.clause.from",
            END: "query.clause.end",
            ELSE: "query.clause.else",
            GROUP_BY: "query.clause.groupby",
            HAVING: "query.clause.having",
            WITH: "query.clause.with",
            LIMIT: "query.clause.limit",
            OFFSET: "query.clause.offset",
            FOR: "query.clause.for"
        },
        FUNCTION: "query.support.function",
        OPERATOR: "query.support.operator",
        VALUE_BIND: "query.value.bind",
        SCOPE_VALUE: "query.scope.value",
        NULLS_VALUE: "query.nulls.value"
    },
    DATABASE: {
        DML: "keyword.database.dml",
        TRIGGER_EXEC: "keyword.database.trigger.execution"
    },
    DECLARATION: {
        ENTITY: {
            CLASS: "declaration.entity.name.class",
            ENUM: "declaration.entity.name.enum",
            INTERFACE: "declaration.entity.name.interface",
            VARIABLE: "declaration.entity.name.variable",
            FUNCTION: "declaration.entity.name.function",
            CONSTRUCTOR: "declaration.entity.name.constructor",
            PROPERTY: "declaration.entity.name.property",
            TRIGGER: "declaration.entity.name.trigger",
        }
    },
    ENTITY: {
        VARIABLE: "entity.name.variable",
        FUNCTION: "entity.name.function",
        CLASS_MEMBER: "entity.name.class.member",
        CLASS_FUNCTION: "entity.name.class.function",
        SOBJECT_FIELD: "entity.name.sobject.field",
        SOBJECT_PROJECTION_FIELD: "entity.name.sobject.projection.field",
        ALIAS_FIELD: "entity.name.sobject.field.alias",
        SUPPORT_CLASS_FUNCTION: "entity.support.class.function",
        SUPPORT_CLASS_MEMBER: "entity.support.class.member",
        ENUM_VALUE: "entity.enum.value"
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
            TRIGGER: "keyword.declaration.trigger",
            STATIC_CONSTRUCTOR: "keyword.declaration.constructor.static",
            PROPERTY_GETTER: "keyword.declaration.property.getter",
            PROPERTY_SETTER: "keyword.declaration.property.setter",
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
        },
        OTHER: "keyword.other",
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
        AT: "puctuation.at",
        EXMARK: "puctuation.exmark",
    },
    BRACKET: {
        CURLY_OPEN: "bracket.curly.open",
        CURLY_CLOSE: "bracket.curly.close",
        INITIALIZER_OPEN: "bracket.initializer.open",
        INITIALIZER_CLOSE: "bracket.initializer.close",
        SQUARE_OPEN: "bracket.square.open",
        SQUARE_CLOSE: "bracket.square.close",
        PARAMETRIZED_TYPE_OPEN: "bracket.parametrized.type.open",
        PARAMETRIZED_TYPE_CLOSE: "bracket.parametrized.type.close",
        INIT_VALUES_OPEN: "bracket.curly.init.values.open",
        INIT_VALUES_CLOSE: "bracket.curly.init.values.close",
        QUERY_START: "bracket.square.query.open",
        QUERY_END: "bracket.square.query.close",
        INNER_QUERY_START: "bracket.parenthesis.query.open",
        INNER_QUERY_END: "bracket.parenthesis.query.close",
        PARENTHESIS_PARAM_OPEN: "bracket.parenthesis.params.open",
        PARENTHESIS_PARAM_CLOSE: "bracket.parenthesis.params.close",
        PARENTHESIS_DECLARATION_PARAM_OPEN: "bracket.parenthesis.declaration.params.open",
        PARENTHESIS_DECLARATION_PARAM_CLOSE: "bracket.parenthesis.declaration.params.close",
        PARENTHESIS_GUARD_OPEN: "bracket.parenthesis.guard.open",
        PARENTHESIS_GUARD_CLOSE: "bracket.parenthesis.guard.close",
        TRIGGER_GUARD_OPEN: "trigger.guard.open",
        TRIGGER_GUARD_CLOSE: "trigger.guard.close",
        ANNOTATION_PARAM_OPEN: "bracket.parenthesis.annotation.params.open",
        ANNOTATION_PARAM_CLOSE: "bracket.parenthesis.annotation.params.close",
        CASTING_OPEN: 'bracket.parenthesis.casting.open',
        CASTING_CLOSE: 'bracket.parenthesis.casting.close',
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
            MAP_KEY_VALUE: "operator.assign.map.key.value",
            ASSIGN: "operator.assign"
        },
    }
};

export interface ApexTokenTypesDef {
    UNKNOWN: string;
    IDENTIFIER: string;
    ANNOTATION: {
        ENTITY: string;
        NAME: string;
        CONTENT: string;
    },
    DATATYPE: {
        PRIMITIVE: string;
        COLLECTION: string;
        SOBJECT: string;
        CUSTOM_CLASS: string;
        SUPPORT_CLASS: string;
        SUPPORT_NAMESPACE: string;
    },
    LITERAL: {
        DATE: string;
        DATE_PARAMETRIZED: string;
        DATE_PARAMETRIZED_START_PARAM: string;
        DATE_PARAMETRIZED_PARAM_VARIABLE: string;
        BOOLEAN: string;
        NULL: string;
        DATETIME: string;
        TIME: string;
        DOUBLE: string;
        DOUBLE_INDICATOR: string;
        INTEGER: string;
        STRING: string;
        LONG: string;
        LONG_INDICATOR: string;
    },
    QUERY: {
        ORDER: string;
        CLAUSE: {
            SELECT: string;
            FIND: string;
            USING_SCOPE: string;
            ORDER_BY: string;
            WHERE: string;
            WHEN: string;
            TYPE_OF: string;
            THEN: string;
            NULLS: string;
            FROM: string;
            END: string;
            ELSE: string;
            GROUP_BY: string;
            HAVING: string;
            WITH: string;
            LIMIT: string;
            OFFSET: string;
            FOR: string;
        },
        FUNCTION: string;
        OPERATOR: string;
        VALUE_BIND: string;
        SCOPE_VALUE: string;
        NULLS_VALUE: string;
    },
    DATABASE: {
        DML: string;
        TRIGGER_EXEC: string;
    },
    DECLARATION: {
        ENTITY: {
            CLASS: string;
            ENUM: string;
            INTERFACE: string;
            VARIABLE: string;
            FUNCTION: string;
            CONSTRUCTOR: string;
            PROPERTY: string;
            TRIGGER: string;
        }
    },
    ENTITY: {
        VARIABLE: string;
        FUNCTION: string;
        CLASS_MEMBER: string;
        CLASS_FUNCTION: string;
        SOBJECT_FIELD: string;
        SOBJECT_PROJECTION_FIELD: string;
        ALIAS_FIELD: string;
        SUPPORT_CLASS_FUNCTION: string;
        SUPPORT_CLASS_MEMBER: string;
        ENUM_VALUE: string;
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
            TRIGGER: string;
            STATIC_CONSTRUCTOR: string;
            PROPERTY_GETTER: string;
            PROPERTY_SETTER: string;
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
        },
        OTHER: string;
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
        AT: string;
        EXMARK: string;
    },
    BRACKET: {
        CURLY_OPEN: string;
        CURLY_CLOSE: string;
        INITIALIZER_OPEN: string;
        INITIALIZER_CLOSE: string;
        SQUARE_OPEN: string;
        SQUARE_CLOSE: string;
        PARAMETRIZED_TYPE_OPEN: string;
        PARAMETRIZED_TYPE_CLOSE: string;
        INIT_VALUES_OPEN: string;
        INIT_VALUES_CLOSE: string;
        QUERY_START: string;
        QUERY_END: string;
        INNER_QUERY_START: string;
        INNER_QUERY_END: string;
        PARENTHESIS_PARAM_OPEN: string;
        PARENTHESIS_PARAM_CLOSE: string;
        PARENTHESIS_DECLARATION_PARAM_OPEN: string;
        PARENTHESIS_DECLARATION_PARAM_CLOSE: string;
        PARENTHESIS_GUARD_OPEN: string;
        PARENTHESIS_GUARD_CLOSE: string;
        TRIGGER_GUARD_OPEN: string;
        TRIGGER_GUARD_CLOSE: string;
        ANNOTATION_PARAM_OPEN: string;
        ANNOTATION_PARAM_CLOSE: string;
        CASTING_OPEN: string;
        CASTING_CLOSE: string;
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
            MAP_KEY_VALUE: string;
            ASSIGN: string;
        },
    }
};