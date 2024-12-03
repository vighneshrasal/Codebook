import {OrderSuccess, OrderFail} from "./components";
import {useLocation} from "react-router-dom";

export const OrderPage = () => {
    const {state} = useLocation();

    return (
        <main>
            {state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>}
        </main>
    )
}
