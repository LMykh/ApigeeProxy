
(function () {
  var parsedResponse = null;
  const originalResponse = context.getVariable("response.content");

  try {
    parsedResponse = JSON.parse(originalResponse);
  } catch (EX) {
    throw new Error("Response was not formatted as JSON");
  }

  var response = null;
  const entity = context.getVariable("ReqParam.entity");
  const responseStatus = context.getVariable("response.status.code");

  const envContext = {
    requestVerb: context.getVariable("requestVerb"),
    requestScheme: context.getVariable("requestScheme"),
    proxyHost: context.getVariable("host"),
    basepath: context.getVariable("proxy.basepath"),
    pathsuffix: context.getVariable("proxy.pathsuffix"),
    itemId: context.getVariable("ReqParam.id") || context.getVariable("accesstoken.userID"),
  }

  if (parsedResponse) {
    response = transform(entity, parsedResponse, envContext);
    context.setVariable("response.content", JSON.stringify(response, null, 2));

    
  }
})();