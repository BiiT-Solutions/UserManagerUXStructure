import {Application} from "./application";
import {Role} from "./role";

export class ApplicationRoleId {
  application: Application;
  role: Role;

  public static clone(from: ApplicationRoleId): ApplicationRoleId {
    const to: ApplicationRoleId = new ApplicationRoleId();
    ApplicationRoleId.copy(from, to);
    return to;
  }
  public static copy(from: ApplicationRoleId, to: ApplicationRoleId): void {
    to.application = from.application ? Application.clone(from.application) : null;
    to.role = from.role ? Role.clone(from.role) : null;
  }
}
