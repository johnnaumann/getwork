import heroPatternUrl from '/img/hero-pattern.png';
import listIconUrl from '/img/list.png';
import trustmarkUrl from '/img/trustmark.png';
import heroImageUrl from '/img/hero-image.png';
import trustpilotUrl from '/img/trustpilot.png';
import trustpilotMobileUrl from '/img/trustpilot-mobile.png';

export function renderHero() {
  return `
    <section id="hero" class="md:h-[720px] h-[600px] w-full relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full md:h-[720px] h-[600px] md:px-[35px] px-[20px]">
        <div class="mx-auto flex md:h-[720px] h-[600px] w-[1220px] relative">
          <div class="w-[1202px] h-[1054px] absolute top-[-95px] lg:right-[-325px] md:right-[-165px] right-[-50px] rotate-[5deg]">
            <img src="${heroPatternUrl}" alt="Hero image" class="absolute top-0 left-0 w-full h-full z-0">
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-0 right-0 w-full md:h-[720px] h-[600px]">
        <div class="absolute bottom-0 left-0 w-full h-[100px] bg-white md:p-[35px] p-[20px]">
          <div class="mx-auto flex w-[1220px] h-full items-center">
            <img src="${trustpilotUrl}" alt="" class="w-[400px] h-[24px] md:block hidden">
            <img src="${trustpilotMobileUrl}" alt="" class="w-[260px] h-[20px] md:hidden block">
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-0 w-full md:h-[720px] h-[600px] md:px-[35px] px-[20px]">
        <div class="mx-auto flex md:h-[720px] h-[600px] w-[1220px] relative">
          <div class="lg:mt-[200px] md:mt-[180px] mt-[110px]">
            <h2 class="text-white text-[27px] md:text-[40px] leading-[34px] md:leading-[51px] w-[390px] md:w-[650px] font-bold balance-text">Certified and trusted roofing specialists <br class="md:hidden">in Glasgow</h2>
            <ul class="text-[#D2D2D2] md:text-[18px] text-[15px] font-medium md:mt-[30px] mt-[35px] font-title mb-[37.5px]">
              <li class="flex items-center mb-[8px]">
                <img src="${listIconUrl}" class="md:w-[24px] w-[18px] h-[18px] md:h-[24px] inline-block md:mr-[15px] mr-[10px]"> NFRC &amp; Trustmark Certified
              </li>
              <li class="flex items-center mb-[8px]">
                <img src="${listIconUrl}" class="md:w-[24px] w-[18px] h-[18px] md:h-[24px] inline-block md:mr-[15px] mr-[10px]"> <span class="md:block hidden">Scottish Home Improvement</span><span class="md:hidden block">SHI</span>&nbsp;Awards finalist 2023/24/25</span>
              </li>
              <li class="flex items-center">
                <img src="${listIconUrl}" class="md:w-[24px] w-[18px] h-[18px] md:h-[24px] inline-block md:mr-[15px] mr-[10px]"> 20 year warranty on all new roofs
              </li>
            </ul>
            <div class="flex items-center mb-[30px]">
              <button class="bg-[#17BADC] rounded-full text-white font-medium md:text-[20px] text-[14px] md:w-[350px] w-[233px] h-[50px] md:h-[60px]">Book your free survey and quote</button>
              <img src="${trustmarkUrl}" alt="" class="block md:w-[80px] w-[67px] md:h-[50px] h-[42px] md:ml-[30px] ml-[20px]">
            </div>
            <div class="flex items-center md:pl-[29px]">
              <span class="text-[#D2D2D2] md:text-[15px] text-[14px] font-medium">Prefer to call?</span><a href="tel:+448008008000" class="text-[#45D1EF] md:text-[20px] text-[16px] font-title md:ml-[2px] ml-[6px] font-semibold">0800 800 8000</a>
            </div>
          </div>
          <div class="w-[1202px] h-[1054px] absolute top-[-95px] lg:right-[-325px] right-[-165px] rotate-[5deg] hidden md:block">
            <img src="${heroImageUrl}" alt="Hero image" class="absolute top-[278px] left-[350px] block w-[549.5px] h-[530.5px] relative z-10">
          </div>
        </div>
      </div>
    </section>
  `;
}

