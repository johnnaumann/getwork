import logoSvg from '/logo-strathclyde.svg?raw';
import hamburgerUrl from '/img/hamburger.png';

export function renderHeader() {
  return `
    <header class="fixed top-0 left-0 right-0 flex justify-center items-center w-full md:p-[35px] p-[20px] z-10 overflow-hidden transition-colors group hover:bg-background">
      <div class="flex justify-between items-center w-[1240px]">
        <a href="#hero" class="group-hover:[--fill-0:#000000]">
          <span class="block w-[164px] h-[30px] md:h-[52px] md:w-[293px]">
            ${logoSvg}
          </span>
        </a>
        <div class="flex items-center">
          <nav class="hidden lg:block text-white text-[15px] tracking-[-0.3px] transition-colors group-hover:text-black">
            <a href="#features" class="hover:text-black">Home</a>
            <a href="#social-proof" class="hover:text-black ml-[34px]">Services</a>
            <a href="#pricing" class="hover:text-black ml-[34px]">Why us?</a>
            <a href="#pricing" class="hover:text-black ml-[34px]">Reviews</a>
            <a href="#pricing" class="hover:text-black ml-[34px]">Recent work</a>
            <a href="#faq" class="hover:text-black ml-[34px]">FAQ</a>
          </nav>
          <a href="#pricing" class="hover:bg-[#2272B6] ml-[34px] text-white tracking-[-0.3px] hidden md:inline-flex items-center justify-center rounded-full bg-primary w-[180px] h-[50px] transition-colors">
            Get a free quote
          </a>
          <img src="${hamburgerUrl}" alt="Hamburger menu" class="block lg:hidden w-[24px] h-[24px] ml-[24px] transition group-hover:invert">
        </div>
      </div>
    </header>
  `;
}

