import {ElementDto} from '@biit-solutions/authorization-services';

export class Role extends ElementDto {
  description: string;
  uniqueName: string;
  uniqueId: string;

  public static override clone(from: Role): Role {
    const to: Role = new Role();
    Role.copy(from, to);
    return to;
  }
  public static override copy(from: Role, to: Role): void {
    super.copy(from, to);
    to.description = from.description;
    to.uniqueName = from.uniqueName;
    to.uniqueId = from.uniqueId;
  }
}
