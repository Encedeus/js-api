export class Role {
    // @ts-ignore
    private _name: string;
    // @ts-ignore
    private _permissions: string[];
    // @ts-ignore
    private _createdAt: Date;
    // @ts-ignore
    private _updatedAt: Date;

    constructor() {
        this.setName("").setPermissions([""]).setCreatedAt(new Date()).setUpdatedAt(new Date());
    }

    get name(): string {
        return this._name;
    }

    public setName(name: string) {
        this._name = name;
        return this;
    }

    get permissions(): string[] {
        return this._permissions;
    }

    public setPermissions(permissions: string[]) {
        this._permissions = permissions;
        return this;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    public setCreatedAt(createdAt: Date) {
        this._createdAt = createdAt;
        return this;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    public setUpdatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt;
        return this;
    }
}