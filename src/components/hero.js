export function renderHero() {
  return `
    <section id="hero" class="bg-navy h-[620px] overflow-hidden pt-[120px]">
      <div class="mx-auto flex h-full w-[1220px] items-center justify-center">
        <figure
          class="relative h-[474.44px] w-[490.26px] -rotate-[-5.23deg] [mask-image:url('/hero/hero-mask-vector.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center]"
        >
          <img
            src="/hero/masked-image.png"
            alt="Roofing team on site"
            class="absolute left-[-9.4%] top-[1.89%] h-full w-[118.66%] max-w-none object-cover"
          />
        </figure>
      </div>
    </section>
  `;
}

