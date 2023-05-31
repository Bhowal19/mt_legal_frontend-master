import { useEffect } from "react";
import { useAppContext } from "../../store";
import styles from "./Dashboard.module.css";

import Inbox from "../Chat/Inbox/Inbox";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import ActiveProjects from "./ActiveProjects/ActiveProjects";
import CartesianChart from "../Chart/CartesianChart";
import { ChartType } from "../../Enums/chartType";

export default function Dashboard() {
    const context = useAppContext();
    const ratesData = {
        data: [96, 78, 106, 129, 144, 176, 135],
        xCategories: [
            "Patent Registration",
            "Business Registration",
            "Trademark Registration",
            "Legal Agreements",
            "Trademark Search",
            "Global Patent Search",
            "Business Licensing",
        ],
        xLabel: "Projects",
        yLabel: "Rates ($)",
    };
    const earningData = {
        data: [186, 350, 428, 316, 436, 475, 420],
        xCategories: [
            "Aug 2022",
            "Sep 2022",
            "Oct 2022",
            "Nov 2022",
            "Dec 2022",
            "Jan 2023",
            "Feb 2023",
        ],
        xLabel: "Months",
        yLabel: "Earnings Trend ($)",
    };
    useEffect(() => {
        // console.log(
        // 	"******************Before Setting Context************************"
        // );
        // console.log("UserName : ", context.userName);
        // console.log("UserSecret : ", context.userSecret);
        context.setUserName("TestUser1");
        context.setUserSecret("TestUser1");
        // console.log(
        // 	"******************After Setting Context************************"
        // );
        // console.log("UserName : ", context.userName);
        // console.log("UserSecret : ", context.userSecret);
    }, []);

    return (
        <div className="bg-dashboard-bg">
            <div className={styles["container"]}>
                <div
                    className="grid grid-cols-4"
                    style={{ gridAutoRows: "min-content" }}
                >
                    <div className="mr-2">
                        <div className="mb-4">
                            <DashboardInfo />
                        </div>
                        <div className="mt-5">
                            <Inbox />
                        </div>
                    </div>
                    <div
                        className={`col-span-3 ml-2 overflow-y-auto ${styles["right-height"]}`}
                    >
                        <div className="">
                            <ActiveProjects />
                        </div>

                        <div className="mt-4 border bg-white">
                            <div className="text-sm font-semibold text-bluePrimary p-4 bg-white">
                                Project Rates
                            </div>
                            <div className="bg-white">
                                <CartesianChart
                                    data={ratesData}
                                    type={ChartType.column}
                                    title=""
                                />
                            </div>
                        </div>
                        <div className="mt-4 border bg-white">
                            <div className="text-sm font-semibold text-bluePrimary p-4 bg-white">
                                Earning Trends
                            </div>
                            <div className="bg-white">
                                <CartesianChart
                                    data={earningData}
                                    type={ChartType.line}
                                    title=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
