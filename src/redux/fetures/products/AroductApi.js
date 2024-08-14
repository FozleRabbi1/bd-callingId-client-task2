import { baseApi } from "../../api/baseApi";

export const ProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => {
                return {
                    url: `/products`,
                    method: "GET",
                };
            },
        }),
        
    }),
});
