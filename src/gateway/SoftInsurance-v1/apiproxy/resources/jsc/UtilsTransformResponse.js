function joinLink(scheme, host, args) {
  if (!args || !Array.isArray(args) || !args.length) {
    return scheme + "://" + host;
  }
  return scheme + "://" + host + args.join("");
}


function transform(entity, input, context) {

  const pathsuffix = context.pathsuffix,
    basepath = context.basepath,
    proxyResponse = {};

    // GET /catalog/products 
    if(pathsuffix === "/catalog/products" && context.requestVerb === "GET"){
         proxyResponse.links = {
      collection: {
        href: joinLink(context.requestScheme, context.proxyHost, [basepath]) + pathsuffix
      }
    };
   proxyResponse.total = input.length;
   proxyResponse.data = [];
        for (var j = 0; j < input.length; j++) {
        proxyResponse.data[j] = input[j];
    }}
    
     // GET /catalog/packages 
    if(pathsuffix === "/catalog/packages" && context.requestVerb === "GET"){
         proxyResponse.links = {
      collection: {
        href: joinLink(context.requestScheme, context.proxyHost, [basepath]) + pathsuffix
      }
    };
   proxyResponse.total = input.length;
   proxyResponse.data = [];
        for (var t = 0; t < input.length; t++) {
        proxyResponse.data[t] = input[t];
    }}
        // GET /clients
     if ( pathsuffix === "/clients" && context.requestVerb === "GET"  ) {
         proxyResponse.links = {
        collection: {
          href: joinLink(context.requestScheme, context.proxyHost, [basepath, pathsuffix])
        }
      };
      proxyResponse.total = input.length;
      proxyResponse.data = [];
      for (var i = 0; i < input.length; i++) {
        proxyResponse.data[i] = input[i];
       
      }
      
    }else{
         proxyResponse.links = {
        collection: {
          href: joinLink(context.requestScheme, context.proxyHost, [basepath, pathsuffix])
        }
      };
         proxyResponse.data = input;
    }
    
  return proxyResponse;
}

if (!module) {
  var module = { exports: {} };
}

module.exports.joinLink = joinLink;