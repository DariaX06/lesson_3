import classnames from "classnames";
import { useState } from "react";
import { Category } from "../../components/Category/Category";
import styles from "./styles.module.css";
export function GenresPage(props) {
    const [activeCategory, setActiveCategory] = useState(props.categorys[0]);
    return <div className={styles.content}>
        <ul className={styles.list}>
            {
                props.categorys.map((category) => <li key={category.id} onClick={() => setActiveCategory(category)} className={classnames(styles.link, {
                    [styles.linkActive]: category === activeCategory
                })}>{category.name}</li>)
            }
        </ul>
        <Category category={activeCategory}></Category>
    </div>
}
