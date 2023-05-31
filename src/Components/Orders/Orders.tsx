import React, { useState } from "react";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";
import { OrderViewType } from "../../Enums/OrderViewType";
import styles from "./Orders.module.css";
import OrdersNavbar from "../OrdersNavbar/OrdersNavbar";
import { ProjectType } from "../../Enums/projectType";
export default function Orders() {
    const [selected, setSelected] = useState(0);
    const ordersDataDummy = [
        {
            attorney: "Attorney1",
            client: "Client1",
            name: "Project1 for Client1",
            dueOn: "21 Jun 2023",
            deliveredOn: "21 Jun 2023",
            total: 320,
            rating: 4,
            status: ProjectType.Completed,
        },
        {
            attorney: "Attorney2",
            client: "Client2",
            name: "Project2 for Client2",
            dueOn: "20 May 2023",
            deliveredOn: null,
            total: 320,
            rating: 3,
            status: ProjectType.Undelivered,
        },
        {
            attorney: "Attorney1",
            client: "Client3",
            name: "Project3 for Client3",
            dueOn: "21 Jul 2023",
            deliveredOn: "21 Jul 2023",
            total: 320,
            rating: 5,
            status: ProjectType.Completed,
        },
        {
            attorney: "Attorney3",
            client: "Client1",
            name: "Project4 for Client1",
            dueOn: "15 Jul 2023",
            deliveredOn: "14 Jul 2023",
            total: 320,
            rating: 2,
            status: ProjectType.Delivered,
        },
        {
            attorney: "Attorney4",
            client: "Client4",
            name: "Project4 for Client4",
            dueOn: "28 Jun 2023",
            deliveredOn: null,
            total: 320,
            rating: 4,
            status: ProjectType.Cancelled,
        },
    ];
    const [view, setView] = useState(OrderViewType.attorney);
    const orderNavbarMenu = [
        { name: "All", url: "", value: 5 },
        { name: "Undelivered", url: "", value: 1 },
        { name: "Delivered", url: "", value: 1 },
        { name: "Completed", url: "", value: 2 },
        { name: "Cancelled", url: "", value: 1 },
    ];
    const handleChange = (value: number) => {
        setSelected(value);

        if (value === 0) setOrdersData(ordersDataDummy);
        else {
            const tempOrders = ordersDataDummy.filter(
                (el) => el.status === value
            );
            setOrdersData(tempOrders);
        }
        console.log("Change");
    };
    const [ordersData, setOrdersData] = useState<any>(ordersDataDummy);
    const badgeColor: any = {
        1: "bg-red-500",
        2: "bg-yellow-500",
        3: "bg-green-500",
        4: "bg-gray-500",
    };
    return (
        <div className={`bg-dashboard-bg ${styles["height"]}`}>
            <div className={styles["container"]}>
                <div className="text-2xl font-normal text-bluePrimary">
                    Manage Orders
                </div>
            </div>
            <OrdersNavbar
                change={handleChange}
                menu={orderNavbarMenu}
                selected={selected}
                key={"secondary-nav"}
            />
            <div className={styles["container"]}>
                <div className="px-4 py-2 bg-white text-sm font-semibold border-b">
                    {orderNavbarMenu[selected].name + " Orders"}
                </div>
                <div className="px-4 py-2 bg-white border-b">
                    <div className="grid grid-cols-10 text-xs text-gray-500 px-4">
                        <div className="col-span-2">
                            {view === OrderViewType.attorney
                                ? "Client"
                                : "Attorney"}
                        </div>
                        <div className="col-span-3">Project</div>
                        <div>Due on</div>
                        <div>Delivered on</div>
                        <div>Total</div>

                        <div>Rating</div>
                        <div>Status</div>
                    </div>
                </div>
                <div
                    className={`px-4 py-2 bg-white ${styles["card-container-height"]}`}
                >
                    {ordersData.map((el: any) => (
                        <div className="grid grid-cols-10 text-xs border p-4 items-center">
                            <div className="col-span-2 font-medium">
                                {view === OrderViewType.attorney
                                    ? el.client
                                    : el.attorney}
                            </div>
                            <div className="col-span-3 font-medium">
                                {el.name}
                            </div>
                            <div>{el.dueOn}</div>
                            <div>{el.deliveredOn}</div>
                            <div>${el.total}</div>

                            <div>
                                {Array.from(
                                    { length: el.rating },
                                    (_, index) => index + 1
                                ).map((el) => (
                                    <div className="bx bxs-star text-gold"></div>
                                ))}
                            </div>
                            <div>
                                <div
                                    className={`${
                                        badgeColor[el.status]
                                    } px-2 py-1 font-semibold text-xs rounded-full w-fit text-white`}
                                >
                                    {ProjectType[el.status]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
