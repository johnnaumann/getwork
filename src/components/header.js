import logoUrl from '/logo-strathclyde.svg';
import hamburgerUrl from '/img/hamburger.png';

export function renderHeader() {
  return `
    <header class="fixed top-0 left-0 right-0 flex justify-center items-center w-full md:p-[35px] p-[20px] z-10 overflow-hidden">
      <div class="flex justify-between items-center w-[1220px]">
        <a href="#hero">
          <img
            src="${logoUrl}"
            alt="Strathclyde Domestic Roofing logo"
            class="block w-[164px] h-[30px] md:h-[52px] md:w-[293px] object-contain"
          />
        </a>
        <div class="flex items-center">
          <nav class="hidden lg:block text-white text-[15px] tracking-[-0.3px]">
            <a href="#features" class="hover:text-primary transition-colors ml-[34px]">Features</a>
            <a href="#social-proof" class="hover:text-primary transition-colors ml-[34px]">Proof</a>
            <a href="#pricing" class="hover:text-primary transition-colors ml-[34px]">Pricing</a>
            <a href="#faq" class="hover:text-primary transition-colors ml-[34px]">FAQ</a>
          </nav>
          <a href="#pricing" class="ml-[34px] text-white tracking-[-0.3px] hidden md:inline-flex items-center justify-center rounded-full bg-primary w-[180px] h-[50px] transition-colors">
            Get started
          </a>
          <img src="${hamburgerUrl}" alt="Hamburger menu" class="block lg:hidden w-[24px] h-[24px] ml-[24px]">
        </div>
      </div>
    </header>
  `;
}

