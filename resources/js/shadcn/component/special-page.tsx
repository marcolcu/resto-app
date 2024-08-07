"use client";

import { Link } from "@inertiajs/react";

export function SpecialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Our Signature Dishes
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Indulge in the flavors that have made our restaurant a local favorite. Explore our selection of
                  signature dishes and experience the culinary artistry that sets us apart.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              alt="Signature Dish"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              width="550"
              height="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Dish</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Signature Dish 1"
              className="object-cover w-full h-60"
              width="400"
              height="300"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">Grilled Salmon with Lemon Butter</h3>
              <p className="text-sm text-muted-foreground">
                Succulent salmon fillet grilled to perfection, served with a tangy lemon butter sauce.
              </p>
              <h4 className="text-base font-semibold md:text-lg">$24.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Dish</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Signature Dish 2"
              className="object-cover w-full h-60"
              width="400"
              height="300"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">Beef Tenderloin with Mushroom Sauce</h3>
              <p className="text-sm text-muted-foreground">
                Tender beef tenderloin served with a rich, creamy mushroom sauce.
              </p>
              <h4 className="text-base font-semibold md:text-lg">$32.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Dish</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Signature Dish 3"
              className="object-cover w-full h-60"
              width="400"
              height="300"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">Roasted Vegetable Lasagna</h3>
              <p className="text-sm text-muted-foreground">
                Layers of fresh vegetables, pasta, and a creamy béchamel sauce.
              </p>
              <h4 className="text-base font-semibold md:text-lg">$18.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Dish</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Signature Dish 4"
              className="object-cover w-full h-60"
              width="400"
              height="300"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">Seared Scallops with Pea Puree</h3>
              <p className="text-sm text-muted-foreground">
                Perfectly seared scallops served atop a vibrant pea puree.
              </p>
              <h4 className="text-base font-semibold md:text-lg">$28.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Dish</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Signature Dish 5"
              className="object-cover w-full h-60"
              width="400"
              height="300"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">Braised Short Ribs with Mashed Potatoes</h3>
              <p className="text-sm text-muted-foreground">
                Tender, fall-off-the-bone short ribs in a rich, savory sauce, served with creamy mashed potatoes.
              </p>
              <h4 className="text-base font-semibold md:text-lg">$29.99</h4>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">View Dish</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Signature Dish 6"
              className="object-cover w-full h-60"
              width="400"
              height="300"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">Butternut Squash Ravioli with Sage Brown Butter</h3>
              <p className="text-sm text-muted-foreground">
                Delicate ravioli filled with creamy butternut squash, served in a fragrant sage brown butter sauce.
              </p>
              <h4 className="text-base font-semibold md:text-lg">$22.99</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
