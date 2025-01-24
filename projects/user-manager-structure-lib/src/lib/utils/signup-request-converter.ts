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
      if (signUpRequest.name && signUpRequest.name.length && signUpRequest.lastname && signUpRequest.lastname.length) {
        userManagerSignUpRequest.username = `${signUpRequest.name[0]}${signUpRequest.lastname}${Math.trunc(Math.random() * 1000)}`
          .replace(/[^a-zA-Z0-9]/g, '_');
      } else {
        userManagerSignUpRequest.username = signUpRequest.email;
      }
    } else {
      userManagerSignUpRequest.username = signUpRequest.username;
    }
    if (!signUpRequest.name || !signUpRequest.name.length) {
      userManagerSignUpRequest.firstname = signUpRequest.name;
    } else {
      userManagerSignUpRequest.firstname = '--';
    }
    if (!signUpRequest.lastname || !signUpRequest.lastname.length) {
      userManagerSignUpRequest.lastname = signUpRequest.lastname;
    } else {
      userManagerSignUpRequest.lastname = '--';
    }

    userManagerSignUpRequest.email = signUpRequest.email;
    userManagerSignUpRequest.password = signUpRequest.password;
    userManagerSignUpRequest.team = signUpRequest.team;
    userManagerSignUpRequest.organization = signUpRequest.organization;
    return userManagerSignUpRequest
  }
}
