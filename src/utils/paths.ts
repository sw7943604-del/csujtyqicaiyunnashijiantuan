/** 站内路径工具：自动拼接 base，使根路径与子路径部署都可用 */
const rawBase = import.meta.env.BASE_URL;

export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** 传入站内相对路径（如 'timeline/'），返回带 base 的链接 */
export function href(path = ''): string {
  return `${base}${path}`.replace(/\/{2,}/g, '/');
}
