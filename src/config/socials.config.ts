export type SocialKey =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "youtube"
  | "discord";

export interface SocialItem {
  href: string;
  icon: string;
}

export type SocialConfig = Record<SocialKey, SocialItem>;

export const socialsConfig: SocialConfig = {
  github: {
    href: "https://github.com/satcoresolutions",
    icon: "/images/socials/github.png",
  },
   linkedin: {
    href: "https://linkedin.com/company/satcore-solutions",
    icon: "/images/socials/linkedin.png",
  },
   twitter: {
    href: "https://x.com/satcore_solutions",
    icon: "/images/socials/twitter.png",
  },
   facebook: {
    href: "https://facebook.com/satcoresolutions",
    icon: "/images/socials/facebook.png",
  },
   instagram: {
    href: "https://instagram.com/satcore_solutions",
    icon: "/images/socials/instagram.png",
  },
   youtube: {
    href: "https://youtube.com/@SatCore_Solutions",
    icon: "/images/socials/youtube.png",
  },
   discord: {
    href: "",
    icon: "/images/socials/discord.png",
  },

};