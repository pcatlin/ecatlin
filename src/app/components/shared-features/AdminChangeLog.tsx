export default function AdminChangeLog() {
    const h2_classes = "text-orange-500 font-bold text-3xl mt-30 mb-10"

    return (
        <>
            <h2 className={h2_classes} id="admin-changelog">Admin Change Log</h2>
            <p>
                I enhanced the previously existing changelog admin feature to show a pretty human readable format of the
                json data of changes made and added search, filtering sorting and pagination to make it easier to use.
            </p>
        </>
    )
}