// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authConfig: {
    issuer: 'https://cognito-idp.region.amazonaws.com/my_pool_id',
    redirectUri: window.location.origin,
    clientId: 'my_client_id',
    responseType: 'code',
    scope: 'phone email openid aws.cognito.signin.user.admin profile',
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: true,
  },
  nameClaim: 'cognito:username'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
