import {
    LayoutDashboard,
    Star,
    Eye,
} from "lucide-react";

type Props = {

    total: number;

    featured: number;

    published: number;

};

const DesignStats = ({
    total,
    featured,
    published,
}: Props) => {

    const stats = [

        {
            title: "Total Designs",
            value: total,
            icon: LayoutDashboard,
            color: "text-blue-400",
        },

        {
            title: "Published",
            value: published,
            icon: Eye,
            color: "text-emerald-400",
        },

        {
            title: "Featured",
            value: featured,
            icon: Star,
            color: "text-yellow-400",
        },

    ];

    return (

        <div
            className="
                grid
                gap-5
                md:grid-cols-3
                mt-8
            "
        >

            {stats.map((item) => {

                const Icon =
                    item.icon;

                return (

                    <div
                        key={item.title}
                        className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <div>

                                <p className="text-slate-400">

                                    {item.title}

                                </p>

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        text-white
                                        mt-2
                                    "
                                >

                                    {item.value}

                                </h2>

                            </div>

                            <Icon
                                className={item.color}
                                size={28}
                            />

                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export default DesignStats;