import {href, Link} from "react-router-dom";
import {ROUTES} from "@/shared/model/routes.ts";

export function BoardsListPage() {
  return <div>Boards list
    <Link to={href(ROUTES.BOARDS, {boardID: "1"})}>Board 1</Link>
  </div>;
}
