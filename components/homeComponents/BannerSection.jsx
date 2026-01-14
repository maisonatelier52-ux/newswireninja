import Image from "next/image";

export function BannerSection() {
  return (
    <section className="mt-12">
      <div className="relative w-full overflow-hidden rounded-md h-[70px] sm:h-[100px] md:h-[100px] lg:h-[140px] xl:h-[170px]">
        <Image src="/images/thatscapitalism.webp" alt="That's Capitalism" fill priority className="object-fit" />
      </div>
    </section>
  );
}