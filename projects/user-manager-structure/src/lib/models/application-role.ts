import {ElementDto} from '@biit-solutions/authorization-services';
import {ApplicationRoleId} from "./application-role-id";

export class ApplicationRole extends ElementDto{
  override id: ApplicationRoleId;

  public static override clone(from: ApplicationRole): ApplicationRole {
    const to: ApplicationRole = new ApplicationRole();
    ApplicationRole.copy(from, to);
    return to;
  }
  public static override copy(from: ApplicationRole, to: ApplicationRole): void {
    super.copy(from, to);
    to.id = from.id ? ApplicationRoleId.clone(from.id) : null;
  }
}
