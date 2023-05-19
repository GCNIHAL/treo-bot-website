import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Eternals" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about playing eternals mta rp with friends…" }}/>
            <a href="https://discord.gg/fpQvAxJFmp" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Join Discord
            </a>
                  <a href="mtasa://172.105.48.156:7772" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Play
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-arrow-circle-right text-2xl text-amber-500`} /> __FEATURES__</p>
                  <p className="text-gray-500 line-clamp-4"></p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-arrow-circle-right text-2xl text-amber-500`} />24/7 ADMIN SUPPORT</p>
                  <p className="text-gray-500 line-clamp-4"></p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-arrow-circle-right text-2xl text-amber-500`} />ACTIVE DEVELOPMENT</p>
                  <p className="text-gray-500 line-clamp-4"></p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-arrow-circle-right text-2xl text-amber-500`} />JOIN MTA COMMUNITY</p>
                  <p className="text-gray-500 line-clamp-4"></p>
                </div>
              </div>
          </div>
      </div>
      </>
  )
}
