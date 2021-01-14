import { Component } from '@angular/core';

import { OAuthService, UserInfo } from 'angular-oauth2-oidc';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cognito-login-demo';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(environment.authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  
  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get displayName() {
    const claims: {[index: string]:any} = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims[environment.nameClaim];
  }
}