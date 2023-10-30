import {ElementDto} from "authorization-services-lib";
import {success} from "ng-packagr/lib/utils/log";

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
    from.description = to.description;
    from.uniqueName = to.uniqueName;
    from.uniqueId = to.uniqueId;
  }
}
