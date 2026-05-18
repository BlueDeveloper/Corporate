const BASE_PATH = '/corporate';

export function assetPath(path: string): string {
  if (path.startsWith(BASE_PATH + '/') || path === BASE_PATH) return path;
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
