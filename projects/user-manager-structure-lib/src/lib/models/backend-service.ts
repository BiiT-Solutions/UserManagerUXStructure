import {ElementDto} from "authorization-services-lib";

export class BackendService extends ElementDto {
  override id: string;
  description: string;
  public static override clone(from: BackendService): BackendService {
    const to: BackendService = new BackendService();
    BackendService.copy(from, to);
    return to;
  }
  public static override copy(from: BackendService, to: BackendService): void {
    super.copy(from, to);
    to.id = from.id;
    to.description = from.description;
  }
}
