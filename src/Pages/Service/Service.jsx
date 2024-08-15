import serviceImg from "../../../public/service.jpg";

const Service = () => {
  return (
    <div className="lg:mt-[100px] mt-[50px] mb-4">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center gap-10">
          <div>
            <aside className="w-full p-10 sm:w-60 bg-[#ffffff] shadow-xl rounded-lg">
              <nav className="space-y-8 text-sm">
                <div className="space-y-2 font-interFont">
                  <h2 className="text-sm  font-semibold tracking-widest uppercase text-blue-500">
                    Getting Started
                  </h2>
                  <div className="flex flex-col space-y-6 text-[16px]">
                    <a rel="noopener noreferrer" href="#">
                      Fast Development
                    </a>
                    <a rel="noopener noreferrer" href="#">
                      App, UX
                    </a>
                    <a rel="noopener noreferrer" href="#">
                      20-30 Employees
                    </a>
                    <a rel="noopener noreferrer" href="#">
                      Appie Template
                    </a>
                    <a rel="noopener noreferrer" href="#">
                      quomodosoft.com/appie
                    </a>
                  </div>
                </div>
              </nav>
            </aside>
          </div>
          <div>
            <div>
              <img src={serviceImg} alt="" />
            </div>
            <div className="space-y-8">
              <h1 className="text-[30px] mt-6 font-interFont font-black">
                What we're Building
              </h1>
              <p className="text-[16px] lg:w-[770px] font-interFont">
                Tomfoolery wind up blag me old mucker chap super ruddy chancer
                bobby, vagabond it's your round cuppa cheesed off blower nice
                one at public school, Why cockup knackered pear shaped amongst
                spiffing good time he nicked it.
              </p>
              <h2 className="text-[20px] lg:w-[770px] font-interFont">
                He lost his bottle mufty spend a penny cheeky at public school
                daft get stuffed mate don't get shirty.
              </h2>
              <p className="text-[16px] lg:w-[800px] font-interFont">
                My good sir cup of char no biggie knees up happy days absolutely
                bladdered don't get shirty with me chimney pot James Bond he
                lost his bottle me old mucker, bobby nice one cack codswallop
                what a load of rubbish Jeffrey barmy blower tomfoolery, crikey
                only a quid at public school mufty tosser up the duff say
                Richard I don't want no agro. Owt to do with me barney quaint
                jolly good off his nut vagabond pardon you gutted mate the
                little rotter excuse my French, the bee's knees don't get shirty
                with me he nicked it give us a bell zonked lavatory Charles
                gosh, Eaton the BBC is victoria sponge a William bog what a load
                of rubbish. Smashing only a quid cockup he lost his bottle
                bugger Jeffrey mufty, starkers blatant zonked easy peasy brolly
                car boot, blimey at public school cheeky bugger you mug david.
                Tomfoolery a load of old tosh Queen's English lemon squeezy old
                hunky-dory mush chap give us a bell bloke, chancer knackered
                cheesed off buggered tinkety tonk old fruit car boot only a quid
                spiffing good time chinwag, he lost his bottle pukka gutted mate
                naff horse play cup of tea baking cakes a blinding shot. bobby
                the wireless matie boy show.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
