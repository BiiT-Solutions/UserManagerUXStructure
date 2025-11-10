import {ElementDto} from '@biit-solutions/authorization-services';
import {BackendService} from "./backend-service";

export class BackendServiceRoleId extends ElementDto {
  override id: undefined;
  backendService: BackendService;
  name: string;

  public static override clone(from: BackendServiceRoleId): BackendServiceRoleId {
    const to: BackendServiceRoleId = new BackendServiceRoleId();
    BackendServiceRoleId.copy(from, to);
    return to;
  }
  public static override copy(from: BackendServiceRoleId, to: BackendServiceRoleId): void {
    super.copy(from, to);
    to.backendService = from.backendService ? BackendService.clone(from.backendService) : null;
    to.name = from.name;
  }
}
