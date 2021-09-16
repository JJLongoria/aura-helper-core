module.exports = {
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
}