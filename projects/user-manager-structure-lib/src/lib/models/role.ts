import {ElementDto} from "./element-dto";

export class Role extends ElementDto {
  name: string;
  description: string;

  public static override copy(from: Role, to: Role): void {
    super.copy(from, to);
    to.name = from.name;
    to.description = from.description;
  }

  public static override clone(from: Role): Role {
    const to: Role = new Role();
    Role.copy(from, to);
    return to;
  }
}
