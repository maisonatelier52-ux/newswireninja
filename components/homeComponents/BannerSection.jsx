import Image from "next/image";

export function BannerSection() {
  return (
    <section className="mt-12">
      <div className="relative w-full overflow-hidden rounded-md h-[70px] sm:h-[100px] md:h-[100px] lg:h-[140px] xl:h-[170px]">
        <Image src="/images/newswireninja_ads_banner.webp" alt="That's newswireninja" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px" priority className="object-fit" />
      </div>
    </section>
  );
}