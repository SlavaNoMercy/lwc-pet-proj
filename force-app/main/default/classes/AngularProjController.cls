public with sharing class AngularProjController {
    @RemoteAction
    public static string helloAngular(string name) {
      return 'User ' + UserInfo.getUserId() + ' says hello ' + name;
    }
}
