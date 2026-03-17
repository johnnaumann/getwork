import logoUrl from '/logo-strathclyde.svg';

export function renderHeader() {
  return `
    <header class="fixed top-0 left-0 right-0 flex justify-center items-center w-full p-[35px]">
      <div class="flex justify-between items-center w-[1220px]">
        <a href="#hero">
          <img
            src="${logoUrl}"
            alt="Strathclyde Domestic Roofing logo"
            class="block h-[52px] w-[293px] object-contain"
          />
        </a>
        <div class="flex items-center">
          <nav class="text-white text-[15px] leading-[-0.3px]">
            <a href="#features" class="hover:text-primary transition-colors ml-[34px]">Features</a>
            <a href="#social-proof" class="hover:text-primary transition-colors ml-[34px]">Proof</a>
            <a href="#pricing" class="hover:text-primary transition-colors ml-[34px]">Pricing</a>
            <a href="#faq" class="hover:text-primary transition-colors ml-[34px]">FAQ</a>
          </nav>
          <a href="#pricing" class="ml-[34px] text-white leading-[-0.3px] inline-flex items-center justify-center rounded-full bg-primary w-[180px] h-[50px] transition-colors">
            Get started
          </a>
        </div>
      </div>
    </header>
  `;
}

