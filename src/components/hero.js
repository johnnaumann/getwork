import heroPatternUrl from '/img/hero-pattern.png';
import listIconUrl from '/img/list.png';
import trustmarkUrl from '/img/trustmark.png';
import heroImageUrl from '/img/hero-image.png';
import trustpilotUrl from '/img/trustpilot.png';

export function renderHero() {
  return `
    <section id="hero" class="h-[720px] w-full relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-[720px] px-[35px]">
        <div class="mx-auto flex h-[720px] w-[1220px] relative">
          <div class="w-[1202px] h-[1054px] absolute top-[-95px] right-[-325px] rotate-[5deg]">
            <img src="${heroPatternUrl}" alt="Hero image" class="absolute top-0 left-0 w-full h-full z-0">
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-0 right-0 w-full h-[720px]">
        <div class="absolute bottom-0 left-0 w-full h-[100px] bg-white p-[35px]">
          <div class="mx-auto flex w-[1220px] h-full items-center">
            <img src="${trustpilotUrl}" alt="" class="w-[400px] h-[24px]">
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-0 w-full h-[720px] px-[35px]">
        <div class="mx-auto flex h-[720px] w-[1220px] relative">
          <div class="mt-[200px]">
            <h2 class="text-white text-[40px] leading-[51px] font-bold">Certified and trusted roofing<br>specialists in Glasgow</h2>
            <ul class="text-[#D2D2D2] text-[18px] font-medium mt-[30px] font-title mb-[30px]">
              <li class="flex items-center mb-[8px]">
                <img src="${listIconUrl}" class="w-[24px] h-[24px] inline-block mr-[15px]"> NFRC &amp; Trustmark Certified
              </li>
              <li class="flex items-center mb-[8px]">
                <img src="${listIconUrl}" class="w-[24px] h-[24px] inline-block mr-[15px]"> Scottish Home Improvement Awards finalist 2023/24/25
              </li>
              <li class="flex items-center">
                <img src="${listIconUrl}" class="w-[24px] h-[24px] inline-block mr-[15px]"> 20 year warranty on all new roofs
              </li>
            </ul>
            <div class="flex items-center mb-[30px]">
              <button class="bg-[#17BADC] rounded-full text-white font-medium text-[20px] w-[350px] h-[60px]">Book your free survey and quote</button>
              <img src="${trustmarkUrl}" alt="" class="block w-[80px] h-[50px] ml-[30px]">
            </div>
            <div class="flex items-center pl-[29px]">
              <span class="text-[#D2D2D2] text-[15px] font-medium">Prefer to call?</span><a href="tel:+448008008000" class="text-[#45D1EF] text-[20px] font-title ml-[2px] font-semibold">0800 800 8000</a>
            </div>
          </div>
          <div class="w-[1202px] h-[1054px] absolute top-[-95px] right-[-325px] rotate-[5deg]">
            <img src="${heroImageUrl}" alt="Hero image" class="absolute top-[278px] left-[350px] block w-[549.5px] h-[530.5px] relative z-10">
          </div>
        </div>
      </div>
    </section>
  `;
}

