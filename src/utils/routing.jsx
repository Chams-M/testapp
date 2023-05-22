export function constructPath(...pathExtensions) {
    const pathExtensionsCleaned = (pathExtensions || []).map((pathExtension) =>
      pathExtension.startsWith('/') ? pathExtension.substring(1) : pathExtension,
    );
    return `/${pathExtensionsCleaned.join('/')}`;
  }
  