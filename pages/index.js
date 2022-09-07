import { useMoralis, useMoralisQuery } from "react-moralis"

export default function Home() {
    const { isWeb3Enabled } = useMoralis()
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // TableName
        // Function for the query
        "ActiveItem",
        (query) => { 
            // console.log('.....',query)
            return query.limit(10).descending("tokenId")
        
        }
    )
    console.log(listedNfts)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            <div className="flex flex-wrap">

                <p>---Home/index.js----</p>


            </div>

        </div>
    )
}
