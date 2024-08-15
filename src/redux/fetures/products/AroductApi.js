import { baseApi } from "../../api/baseApi";

export const ProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            providesTags: ["Products"],
            query: () => {
                return {
                    url: `/products`,
                    method: "GET",
                };
            },
        }),
        updateProduct: builder.mutation({
            query: (data) => {
                return {
                    url: `/products`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["Products"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"],
        }),

    }),
});
