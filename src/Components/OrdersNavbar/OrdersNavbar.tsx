import styles from "./OrdersNavbar.module.css";

export default function OrdersNavbar(props: {
    selected: number;
    change: any;
    menu: { name: string; url: string; value: number }[];
}) {
    return (
        <div className="w-full ">
            <div className="w-4/5 border-b flex items-center m-auto py-2 text-sm">
                {props.menu.map((el, index) => (
                    <div className="mr-4 pb-2 flex items-center">
                        <a
                            className={
                                index === props.selected
                                    ? `${styles["active"]}`
                                    : " text-gray-500"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                props.change(index);
                            }}
                        >
                            <div className="flex items-center">
                                <div>{el.name}</div>
                            </div>
                        </a>
                        <div
                            className={`ml-1 h-6 w-6 flex items-center justify-center rounded-full ${
                                index === props.selected
                                    ? "bg-gold"
                                    : "bg-gray-500"
                            } text-white text-xs`}
                        >
                            {el.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
