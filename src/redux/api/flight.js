import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flightApi = createApi({
    reducerPath : "flightApi",
    baseQuery: fetchBaseQuery ({baseUrl :'http://localhost:3000/api/v1/'}),
    endpoints : (builder) =>({
        getFlights : builder.query({
            query : (params) => ({
                url : '/admin/allFlights'
            })
        })
    })
})

export const {useGetFlightsQuery} = flightApi