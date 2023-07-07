export declare class User {
    private _name;
    private _email;
    private _createdAt;
    private _updatedAt;
    private _roleId;
    constructor();
    get name(): string;
    setName(value: string): this;
    get email(): string;
    setEmail(value: string): this;
    get createdAt(): Date;
    setCreatedAt(value: Date): this;
    get updatedAt(): Date;
    setUpdatedAt(value: Date): this;
    get roleId(): number;
    setRoleId(value: number): this;
}
