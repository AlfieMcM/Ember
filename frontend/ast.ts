// deno-lint-ignore-file
// deno-lint-ignore-file no-empty-interface
export type NodeType =
	| "Program"
	| "VarDeclaration"
	| "FunctionDeclaration"
	| "AssignmentExpr"
	| "MemberExpr"
	| "CallExpr"
	| "Property"
	| "ObjectLiteral"
	| "NumericLiteral"
	| "Identifier"
	| "BinaryExpr";

export interface Stmt {
	kind: NodeType;
}

export interface Program extends Stmt {
	kind: "Program";
	body: Stmt[];
}

export interface VarDeclaration extends Stmt {
	kind: "VarDeclaration";
	constant: boolean;
	identifier: string;
	value?: Expr;
}

export interface FunctionDeclaration extends Stmt {
	kind: "FunctionDeclaration";
	parameters: string[];
	name: string;
	body: Stmt[];
}

export interface Expr extends Stmt {}

export interface AssignmentExpr extends Expr {
	kind: "AssignmentExpr";
	assigne: Expr;
	value: Expr;
}

export interface BinaryExpr extends Expr {
	kind: "BinaryExpr";
	left: Expr;
	right: Expr;
	operator: string;
}

export interface CallExpr extends Expr {
	kind: "CallExpr";
	args: Expr[];
	caller: Expr;
}

export interface MemberExpr extends Expr {
	kind: "MemberExpr";
	object: Expr;
	property: Expr;
	computed: boolean;
}

export interface Identifier extends Expr {
	kind: "Identifier";
	symbol: string;
}

export interface NumericLiteral extends Expr {
	kind: "NumericLiteral";
	value: number;
}

export interface Property extends Expr {
	kind: "Property";
	key: string;
	value?: Expr;
}

export interface ObjectLiteral extends Expr {
	kind: "ObjectLiteral";
	properties: Property[];
}