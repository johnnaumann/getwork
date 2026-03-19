import logoSvg from '/logo-strathclyde.svg?raw';
import hamburgerUrl from '/img/hamburger.png';

export function renderHeader() {
  return `
    <header class="fixed top-0 left-0 right-0 flex justify-center items-center w-full md:p-[35px] p-[20px] z-10 overflow-hidden transition-colors group lg:hover:bg-background">
      <div class="flex justify-between items-center w-full max-w-[1240px] flex-nowrap">
        <a href="#home" class="lg:group-hover:[--fill-0:#000000]">
          <span class="block w-[164px] h-[30px] md:h-[52px] md:w-[293px] shrink-0">
            ${logoSvg}
          </span>
        </a>
        <div class="flex items-center flex-nowrap">
          <nav class="hidden lg:flex text-white text-[15px] tracking-[-0.3px] transition-colors lg:group-hover:text-black flex-nowrap items-center whitespace-nowrap gap-[clamp(16px,2.5vw,34px)]">
            <a href="#home" class="transition-colors">Home</a>
            <a href="#services" class="transition-colors">Services</a>
            <a href="#why-us" class="transition-colors">Why us?</a>
            <a href="#reviews" class="transition-colors">Reviews</a>
            <a href="#recent-work" class="transition-colors">Recent work</a>
            <a href="#faq" class="transition-colors">FAQ</a>
          </nav>
          <a href="#pricing" class="hover:bg-[#2272B6] ml-[34px] text-white tracking-[-0.3px] hidden md:inline-flex items-center justify-center rounded-full bg-primary w-[180px] h-[50px] transition-colors">
            Get a free quote
          </a>
          <img src="${hamburgerUrl}" alt="Hamburger menu" class="block lg:hidden w-[24px] h-[24px] ml-[24px] transition lg:group-hover:invert">
        </div>
      </div>
    </header>
  `;
}

