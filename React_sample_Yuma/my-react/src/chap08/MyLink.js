import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './RouterNav.css';

export function MyLink({ to, children, ...props }) {
  // 現在のパスとリンク先がマッチしたかを判定
  const resolvedPath = useResolvedPath(to);	
  const isMatch = !!useMatch({
    path: resolvedPath.pathname, end: true });
  // マッチしたかどうかに応じて、リンクか平のテキストを返す
  return isMatch ?
    <span className="active">{children}</span> :
    <Link to={to} {...props}>{children}</Link>;
}
