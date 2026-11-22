/**
 * The team behind THE JIMMY LAB. Single source of truth for the Team page
 * and for the Person schema on /team. The `link` values are the profile
 * URLs as given; do not add them to schema sameAs until each is verified
 * against the real profile.
 */
export interface TeamMember {
  n: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  link: string;
}

export const team: TeamMember[] = [
  { n: '01', name: 'Jibran', role: 'Founder & CEO', initials: 'J', color: 'from-[#ff6b35] to-[#ff9a5c]', link: 'https://www.linkedin.com/in/saadmalikceo/' },
  { n: '02', name: 'Jawad Malik', role: 'GHL - N8N - Make.com Expert, SEO', initials: 'JM', color: 'from-[#00d4aa] to-[#38bdf8]', link: 'https://www.linkedin.com/in/jawad-malik-9631b0250/' },
  { n: '03', name: 'Arsalan', role: 'UI/UX Developer / Graphic Designer', initials: 'A', color: 'from-[#a855f7] to-[#ec4899]', link: 'https://www.linkedin.com/in/aimen-sajjad-3b6854298/' },
  { n: '04', name: 'Irfan', role: 'Sr Frontend Developer', initials: 'I', color: 'from-[#f59e0b] to-[#ff6b35]', link: 'https://www.linkedin.com/in/laibasheikh04/' },
  { n: '05', name: 'M.Ali', role: 'WordPress Developer', initials: 'MA', color: 'from-[#3b82f6] to-[#06b6d4]', link: 'https://www.linkedin.com/in/muhammad-ali-4aa95515b/' },
  { n: '06', name: 'Sadeed', role: 'Sr Backend Developer', initials: 'S', color: 'from-[#ec4899] to-[#8b5cf6]', link: 'https://www.linkedin.com/in/alizey-tariq/' },
];
