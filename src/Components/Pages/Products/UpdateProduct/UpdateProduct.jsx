import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const id = useParams()
    console.log(id);
    return (
        <div>

            product pudate

        </div>
    );
};

export default UpdateProduct;