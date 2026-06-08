const BASE_PATH = ''; // 독립 도메인 루트 서빙(2026-06-08): /corporate 접두 제거

export function assetPath(path: string): string {
  if (path.startsWith(BASE_PATH + '/') || path === BASE_PATH) return path;
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
