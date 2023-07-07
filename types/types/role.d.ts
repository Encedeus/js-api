export declare class Role {
    private _name;
    private _permissions;
    private _createdAt;
    private _updatedAt;
    constructor();
    get name(): string;
    setName(name: string): this;
    get permissions(): string[];
    setPermissions(permissions: string[]): this;
    get createdAt(): Date;
    setCreatedAt(createdAt: Date): this;
    get updatedAt(): Date;
    setUpdatedAt(updatedAt: Date): this;
}
