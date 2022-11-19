import classnames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategorys } from "../../store/categorys/selectors";
import {loadCategorysIfNotExist} from "../../store/categorys/loadCategorysIfNotExist";
import styles from "./styles.module.css";
import { NavLink, Outlet } from "react-router-dom";

export function GenresPage() {
    const dispatch = useDispatch();
    const categorys = useSelector((state) => selectCategorys(state));
    
    useEffect(() => {
        dispatch(loadCategorysIfNotExist);
    }, []);
    return <div className={styles.content}>
        <ul className={styles.list}>
            {   categorys.length > 0 &&
                categorys.map((category) => <li key={category.id}><NavLink to={category.id} className={({isActive}) => classnames(styles.link, {
                    [styles.linkActive]: isActive
                })}>{category.name}</NavLink></li>)
            }
        </ul>
        <Outlet></Outlet>
    </div>
}