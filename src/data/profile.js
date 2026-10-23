/**
 * Profile & Social Configuration
 * Central source of truth for Umair Ali's real portfolio details.
 */

const userEmail = "umairalih7@gmail.com";
const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=umairalih7%40gmail.com&su=Portfolio%20Inquiry";

export const profileConfig = {
  name: "Umair Ali",
  role: "Frontend Developer",
  status: "Open to Opportunities & Collaborations",

  // Profile Photo: Place your photo in the public/ folder as 'profile.jpg'
  avatarUrl: "/profile.jpg",

  // Direct contact email
  email: userEmail,

  bio: "Hi, I'm Umair Ali. A Frontend Developer building responsive, interactive web applications with modern HTML, CSS, JavaScript, and React, alongside intelligent workflow automations using n8n. Focused on clean code, intuitive user experiences, and practical web solutions.",

  // Verified Social Profile Links
  socialLinks: {
    github: "https://github.com/umairdevh7",
    linkedin: "https://www.linkedin.com/in/umair-ali-0b23243a6",
    email: gmailComposeUrl,
  },

  // Active Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],
};
