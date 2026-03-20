import logoSvg from '/logo-strathclyde.svg?raw';
import hamburgerUrl from '/img/hamburger.png';
import caretUrl from '/img/caret.png';

export function renderHeader() {
  return `
    <div class="group">
      <div class="fixed inset-0 bg-[rgba(25,25,25,0.50)] opacity-0 lg:group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
      <header class="fixed top-0 left-0 right-0 flex justify-center items-center w-full md:p-[35px] p-[20px] z-30 overflow-hidden transition-colors lg:group-hover:bg-background">
        <div class="relative z-10 flex justify-between items-center w-full max-w-[1240px] flex-nowrap">
          <a href="#home" class="lg:group-hover:[--fill-0:#333333]">
            <span class="block w-[164px] h-[30px] md:h-[52px] md:w-[293px] shrink-0">
              ${logoSvg}
            </span>
          </a>
          <div class="flex items-center flex-nowrap">
            <nav class="hidden lg:flex text-white text-[15px] tracking-[-0.3px] transition-colors lg:group-hover:text-black flex-nowrap items-center whitespace-nowrap gap-[clamp(16px,2.5vw,34px)]">
              <a href="#home" class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Home</a>
            <a href="#services" class="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Services
              <img
                src="${caretUrl}"
                alt=""
                class="ml-[6px] w-[10px] h-[6px] lg:group-hover:[filter:invert(1)]"
              />
            </a>
              <a href="#why-us" class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Why us?</a>
              <a href="#reviews" class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Reviews</a>
              <a href="#recent-work" class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Recent work</a>
              <a href="#faq" class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">FAQ</a>
            </nav>
            <a href="#pricing" class="hover:bg-[#2272B6] ml-[34px] text-white tracking-[-0.3px] hidden md:inline-flex items-center justify-center rounded-full bg-primary w-[180px] h-[50px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0">
              Get a free quote
            </a>
            <img src="${hamburgerUrl}" alt="" aria-hidden="true" class="block lg:hidden w-[24px] h-[24px] ml-[24px] transition lg:group-hover:invert">
          </div>
        </div>
      </header>
    </div>
  `;
}
