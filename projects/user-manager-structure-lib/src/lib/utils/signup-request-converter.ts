import {SignUpRequest} from "../models/signup-request";

export class SignupRequestConverter {
  public static convertSignUpRequest(signUpRequest: {
    username: string,
    name: string,
    email: string,
    lastname: string,
    password: string,
    team: string,
    organization: string
  }): SignUpRequest {
    const userManagerSignUpRequest: SignUpRequest = new SignUpRequest();
    if (!signUpRequest.username || !signUpRequest.username.length) {
      userManagerSignUpRequest.username = `${signUpRequest.name[0]}${signUpRequest.lastname}${Math.trunc(Math.random() * 1000)}`
        .replace(/[^a-zA-Z0-9]/g, '_');
    } else {
      userManagerSignUpRequest.username = signUpRequest.username;
    }
    userManagerSignUpRequest.email = signUpRequest.email;
    userManagerSignUpRequest.firstname = signUpRequest.name;
    userManagerSignUpRequest.lastname = signUpRequest.lastname;
    userManagerSignUpRequest.password = signUpRequest.password;
    userManagerSignUpRequest.team = signUpRequest.team;
    userManagerSignUpRequest.organization = signUpRequest.organization;
    return userManagerSignUpRequest
  }
}
