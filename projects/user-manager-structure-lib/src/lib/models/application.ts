import {ElementDto} from "./element-dto";

export class Application extends ElementDto {
  name: string;
  description: string;

  public static override clone(from: Application): Application {
    const to: Application = new Application();
    Application.copy(from, to);
    return to;
  }
  public static override copy(from: Application, to: Application): void {
    super.copy(from, to);
    to.name = from.name;
    to.description = from.description;
  }
}
