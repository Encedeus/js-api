export class User {
    // @ts-ignore
    private _name: string;
    // @ts-ignore
    private _email: string;
    // @ts-ignore
    private _createdAt: Date;
    // @ts-ignore
    private _updatedAt: Date;
    // @ts-ignore
    private _roleId: number;

    constructor() {
        this.setName("").setEmail("").setCreatedAt(new Date()).setUpdatedAt(new Date()).setRoleId(0)
    }

    get name(): string {
        return this._name;
    }

    public setName(value: string) {
        this._name = value;
        return this;
    }

    get email(): string {
        return this._email;
    }

    public setEmail(value: string) {
        this._email = value;
        return this;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    public setCreatedAt(value: Date) {
        this._createdAt = value;
        return this;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    public setUpdatedAt(value: Date) {
        this._updatedAt = value;
        return this;
    }

    get roleId(): number {
        return this._roleId;
    }

    public setRoleId(value: number) {
        this._roleId = value;
        return this;
    }
}