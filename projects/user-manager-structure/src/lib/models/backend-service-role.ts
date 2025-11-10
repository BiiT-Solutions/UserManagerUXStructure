import {ElementDto} from '@biit-solutions/authorization-services';
import {BackendServiceRoleId} from "./backend-service-role-id";

export class BackendServiceRole extends ElementDto {
  override id: BackendServiceRoleId;

  public static override clone(from: BackendServiceRole): BackendServiceRole {
    const to: BackendServiceRole = new BackendServiceRole();
    BackendServiceRole.copy(from, to);
    return to;
  }
  public static override copy(from: BackendServiceRole, to: BackendServiceRole): void {
    super.copy(from, to);
    to.id = from.id ? BackendServiceRoleId.clone(from.id) : null;
  }
}
