import Image from "next/image";

export function BannerSection() {
  return (
    <section className="mt-12">
      <div className="relative w-full overflow-hidden rounded-md h-[70px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[260px]">
        <Image src="/images/thatscapitalism.webp" alt="That's Capitalism" fill priority className="object-fit" />
      </div>
    </section>
  );
}