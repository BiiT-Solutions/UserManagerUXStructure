import {ElementDto} from "authorization-services-lib";
import {BackendService} from "./backend-service";

export class BackendServiceRoleId extends ElementDto {
  override id: undefined;
  service: BackendService;
  name: string;

  public static override clone(from: BackendServiceRoleId): BackendServiceRoleId {
    const to: BackendServiceRoleId = new BackendServiceRoleId();
    BackendServiceRoleId.copy(from, to);
    return to;
  }
  public static override copy(from: BackendServiceRoleId, to: BackendServiceRoleId): void {
    super.copy(from, to);
    to.service = from.service ? BackendService.clone(from.service) : null;
    to.name = from.name;
  }
}
