import styles from "./DashboardInfo.module.css";

export default function DashboardInfo() {
    const data = [
        {
            name: "Orders ongoing",
            value: 4,
            prefix: "",
            postfix: "",
        },
        {
            name: "Order completed",
            value: 6,
            prefix: "",
            postfix: "",
        },
        {
            name: "Delivered on time",
            value: 100,
            prefix: "",
            postfix: "%",
        },
        {
            name: "Order completion rate",
            value: 60,
            prefix: "",
            postfix: "%",
        },
    ];
    return (
        <div className="bg-white h-52">
            <div className="border-b w-full flex items-center p-4">
                <img
                    src="/img/profiles/MaxVerstappen.png"
                    className={`w-10 h-10 rounded-full mr-2 ${styles["img"]}`}
                />

                <div className="font-semibold">Max Verstappen</div>
            </div>
            <div className="px-4 py-2 border-b">
                {data.map((el) => (
                    <div className="flex items-center justify-between text-sm">
                        <div className="font-semibold mr-4 text-gray-500">
                            {el.name}
                        </div>
                        <div>{`${el.prefix}${el.value}${el.postfix}`}</div>
                    </div>
                ))}
            </div>
            <div className="px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                    <div className="font-semibold mr-4">Earning this month</div>
                    <div className="font-semibold">$3200</div>
                </div>
            </div>
        </div>
    );
}
