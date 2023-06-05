import styles from "./category.module.css"

const CategoryButton = ({category}) => {
    return(
        <button className={styles.category_button}>
            {category}
        </button>
    )
}

export default CategoryButton