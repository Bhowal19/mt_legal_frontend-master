import React, { useState } from "react";
import { ProjectType } from "../../../Enums/projectType";
import { Select } from "antd";

export default function ActiveProjects() {
    const [filter, setFilter] = useState(ProjectType.Undelivered);
    const handleChange = (value: number) => {
        setFilter(value);
    };
    const projects = [
        {
            name: "Project 1",
            status: ProjectType.Undelivered,
            price: "$30",
        },
        {
            name: "Project 2",
            status: ProjectType.Delivered,
            price: "$30",
        },
        {
            name: "Project 3",
            status: ProjectType.Delivered,
            price: "$30",
        },
        {
            name: "Project 4",
            status: ProjectType.Cancelled,
            price: "$30",
        },
        {
            name: "Project 5",
            status: ProjectType.Completed,
            price: "$30",
        },
        {
            name: "Project 6",
            status: ProjectType.Undelivered,
            price: "$30",
        },
    ];
    const badgeColor = {
        1: "bg-red-500",
        2: "bg-yellow-500",
        3: "bg-green-500",
        4: "bg-gray-500",
    };
    return (
        <div className="p-4 border bg-white">
            <div className=" flex items-center justify-between">
                <div className="text-sm font-semibold text-bluePrimary">
                    Active Orders
                </div>
                <div>
                    <span className="text-xs font-medium">Filter :&nbsp;</span>
                    <Select
                        placeholder="Country"
                        defaultValue={filter}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            {
                                value: ProjectType.Undelivered,
                                label: "Undelivered",
                            },
                            {
                                value: ProjectType.Delivered,
                                label: "Delivered",
                            },
                            {
                                value: ProjectType.Completed,
                                label: "Completed",
                            },
                            {
                                value: ProjectType.Cancelled,
                                label: "Cancelled",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="my-2">
                {projects.map(
                    (el) =>
                        el.status === filter && (
                            <div className="px-4 py-2 border grid items-center grid-cols-4">
                                <div className="col-span-2 font-medium text-sm text-bluePrimary">
                                    {el.name}
                                </div>
                                <div className="">
                                    <div className="text-xs font-medium text-gray-500">
                                        Price
                                    </div>
                                    <div className="text-sm font-semibold text-black">
                                        {el.price}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-xs font-medium text-gray-500 mr-2">
                                        Status
                                    </div>
                                    <div
                                        className={`${
                                            badgeColor[el.status]
                                        } px-2 py-1 font-semibold text-xs rounded-full w-fit text-white`}
                                    >
                                        {ProjectType[el.status]}
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
