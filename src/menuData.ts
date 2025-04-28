export type MenuType = {
  label: string;
  href: string;
  items?: MenuType[];
};

export const menuItems: MenuType[] = [
  {
    label: "Company",
    href: "/company",
    items: [
      {
        label: "About",
        href: "/about",
        items: [
          {
            label: "About 1",
            href: "/about-1",
          },
          {
            label: "About 2",
            href: "/about-2",
          },
          {
            label: "About 3",
            href: "/about-3",
          },
        ],
      },
      {
        label: "Contact",
        href: "/contact",
        items: [
          {
            label: "Contact 1",
            href: "/contact-1",
          },
          {
            label: "Contact 2",
            href: "/contact-2",
          },
          {
            label: "Contact 3",
            href: "/contact-3",
          },
        ],
      },
      {
        label: "Careers",
        href: "/careers",
        items: [
          {
            label: "Careers 1",
            href: "/careers-1",
          },
          {
            label: "Careers 2",
            href: "/careers-2",
          },
          {
            label: "Careers 3",
            href: "/careers-3",
          },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    items: [
      {
        label: "Product 1",
        href: "/product-1",
        items: [
          {
            label: "Product 1.1",
            href: "/product-1.1",
          },
          {
            label: "Product 1.2",
            href: "/product-1.2",
          },
          {
            label: "Product 1.3",
            href: "/product-1.3",
          },
        ],
      },
      {
        label: "Product 2",
        href: "/product-2",
        items: [
          {
            label: "Product 2.1",
            href: "/product-2.1",
            items: [
              {
                label: "Product 2.1.1",
                href: "/product-2.1.1",
              },
              {
                label: "Product 2.1.2",
                href: "/product-2.1.2",
              },
              {
                label: "Product 2.1.3",
                href: "/product-2.1.3",
              },
            ],
          },
          {
            label: "Product 2.2",
            href: "/product-2.2",
            items: [
              {
                label: "Product 2.2.1",
                href: "/product-2.2.1",
              },
              {
                label: "Product 2.2.2",
                href: "/product-2.2.2",
              },
              {
                label: "Product 2.2.3",
                href: "/product-2.2.3",
              },
            ],
          },
          {
            label: "Product 2.3",
            href: "/product-2.3",
          },
        ],
      },
      {
        label: "Product 3",
        href: "/product-3",
        items: [
          {
            label: "Product 3.1",
            href: "/product-3.1",
          },
          {
            label: "Product 3.2",
            href: "/product-3.2",
          },
          {
            label: "Product 3.3",
            href: "/product-3.3",
          },
          {
            label: "Product 3.4",
            href: "/product-3.4",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
