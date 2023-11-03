import {ElementDto} from "authorization-services-lib";

export class Application extends ElementDto {
  description: string;

  public static override clone(from: Application): Application {
    const to: Application = new Application();
    Application.copy(from, to);
    return to;
  }
  public static override copy(from: Application, to: Application): void {
    super.copy(from, to);
    to.description = from.description;
  }

}
