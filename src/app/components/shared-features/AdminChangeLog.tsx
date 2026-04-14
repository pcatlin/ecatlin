import styles from "@/app/styles";

export default function AdminChangeLog() {
    return (
        <>
            <h2 className={styles.h2} id="admin-changelog">Admin Change Log</h2>
            <p>
                I enhanced the previously existing changelog admin feature to show a pretty human readable format of the
                json data of changes made and added search, filtering sorting and pagination to make it easier to use.
            </p>
        </>
    )
}