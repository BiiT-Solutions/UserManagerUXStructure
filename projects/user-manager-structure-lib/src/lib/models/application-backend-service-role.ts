import {ElementDto} from "authorization-services-lib";
import {ApplicationBackendServiceRoleId} from "./application-backend-service-role-id";

export class ApplicationBackendServiceRole extends ElementDto {
  override id: ApplicationBackendServiceRoleId;
  public static override clone(from: ApplicationBackendServiceRole): ApplicationBackendServiceRole {
    const to: ApplicationBackendServiceRole = new ApplicationBackendServiceRole();
    ApplicationBackendServiceRole.copy(from, to);
    return to;
  }
  public static override copy(from: ApplicationBackendServiceRole, to: ApplicationBackendServiceRole): void {
    super.copy(from, to);
    to.id = from ? ApplicationBackendServiceRoleId.clone(from.id) : null;
  }
}
