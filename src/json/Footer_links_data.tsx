// types/footerLinksData.ts
export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLinksData {
  footerSections: FooterSection[];
}


export const footerLinksData: FooterLinksData = {
  footerSections: [
    {
      title: "Patent Core",
      links: [
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" }
      ]
    },
    {
      title: "News Media",
      links: [
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" }
      ]
    },
    {
      title: "Blogs",
      links: [
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" }
      ]
    },
    {
      title: "Contact",
      links: [
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" },
        { text: "Find A Doctor", href: "/" }
      ]
    }
  ]
};

export default footerLinksData;
