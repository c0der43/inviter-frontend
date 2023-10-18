import {FC, ReactNode} from "react";
import {useSelector} from "react-redux";
import {getUserDataSelector} from "@/entities/User/model/selectors/getUserDataSelector/getUserDataSelector.ts";
import {Navigate, useLocation} from "react-router-dom";
import {getRouteLogin} from "@/shared/const/router.ts";

interface ReqAuthProps {
    children?: ReactNode;
}
export const ReqAuth: FC<ReqAuthProps> = (props) => {

    const location = useLocation();

    const {
        children
    } = props;

    const auth = useSelector(getUserDataSelector);

    if(!auth){
        return <Navigate to={getRouteLogin()} state={{from: location}} replace/>
    }

    return children;
}
