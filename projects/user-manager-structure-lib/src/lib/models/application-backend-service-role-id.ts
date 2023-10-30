import {ApplicationRole} from "./application-role";
import {BackendServiceRole} from "./backend-service-role";

export class ApplicationBackendServiceRoleId {
    applicationRole: ApplicationRole;
    backendServiceRole: BackendServiceRole;
    public static clone(from: ApplicationBackendServiceRoleId): ApplicationBackendServiceRoleId {
        const to: ApplicationBackendServiceRoleId = new ApplicationBackendServiceRoleId();
        ApplicationBackendServiceRoleId.copy(from, to);
        return to;
    }
    public static copy(from: ApplicationBackendServiceRoleId, to: ApplicationBackendServiceRoleId): void {
        to.applicationRole = from.applicationRole ? ApplicationRole.clone(from.applicationRole) : null;
        to.backendServiceRole = from.backendServiceRole ? BackendServiceRole.clone(from.backendServiceRole) : null;
    }
}
