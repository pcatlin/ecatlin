import styles from "@/app/styles";

export default function SavingsCalculator() {
    return (
        <>
            <h2 className={styles.h2} id="savings-calculator">Savings Calculator</h2>

            <p>I created a nifty savings calculator tool for both Custard and the Custard App.
                It allows users to select various categories of products to estimate how much money the Custard App
                could earn them in cashback
            </p>
            <img src="/images/custard/savings-calculator-small.webp"
                 alt="Savings Calculator Screenshot"
                 className="rounded-lg max-w-full sm:max-w-2/3 lg:max-w-full mx-auto mt-5"
                 width="260" height="424"/>
        </>
    )
}