export class AppConfiguration {
  public static APP_NAME: string = 'ADMINPROXYLOGIN';
  public static AREA: string = 'REMEDIACIONES';

  //#beginregion Configuraciones de microservicios
  public static MS_ADMINPROXYLOGIN_GET_CONFIGURATION: any = {
    name: AppConfiguration.AREA,
    type: AppConfiguration.APP_NAME,
    category: 'GET_CONFIGURATION',
  };

  public static MS_ADMINPROXYLOGIN_GET_CONFIGURATIONS: any = {
    name: AppConfiguration.AREA,
    type: AppConfiguration.APP_NAME,
    category: 'GET_CONFIGURATIONS',
  };

  public static MS_ADMINPROXYLOGIN_POST_CONFIGURATION: any = {
    name: AppConfiguration.AREA,
    type: AppConfiguration.APP_NAME,
    category: 'POST_CONFIGURATION',
  };

  public static MS_ADMINPROXYLOGIN_PUT_CONFIGURATION: any = {
    name: AppConfiguration.AREA,
    type: AppConfiguration.APP_NAME,
    category: 'PUT_CONFIGURATION',
  };

  public static MS_ADMINPROXYLOGIN_DELETE_CONFIGURATION: any = {
    name: AppConfiguration.AREA,
    type: AppConfiguration.APP_NAME,
    category: 'DELETE_CONFIGURATION',
  };

  //#endregion Configuraciones de microservicios
}