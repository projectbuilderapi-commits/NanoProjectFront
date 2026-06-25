import DesignForm
from
"../../components/admin/designs/DesignForm";

const AddDesignPage = () => {

    return (

        <div
            className="
                min-h-screen
                bg-slate-950
                p-8
            "
        >

            <h1
                className="
                    text-3xl
                    font-bold
                    text-white
                    mb-8
                "
            >
                Add Design
            </h1>

            <DesignForm />

        </div>

    );

};

export default AddDesignPage;