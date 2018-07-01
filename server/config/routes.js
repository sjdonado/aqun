const blueprintConfig = require('./blueprints');

const ROUTE_PREFIX = blueprintConfig.blueprints.prefix || '';

// add global prefix to manually defined routes
function addGlobalPrefix(routes) {
  const paths = Object.keys(routes);
  const newRoutes = {};

  if (ROUTE_PREFIX === '') {
    return routes;
  }

  paths.forEach((path) => {
    const pathParts = path.split(' ');
    const uri = pathParts.pop();
    let prefixedURI = '';
    let newPath = '';

    prefixedURI = ROUTE_PREFIX + uri;

    pathParts.push(prefixedURI);

    newPath = pathParts.join(' ');
    // construct the new routes
    newRoutes[newPath] = routes[path];
  });

  return newRoutes;
}

module.exports.routes = addGlobalPrefix({});
