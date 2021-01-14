export const environment = {
  production: true,
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
