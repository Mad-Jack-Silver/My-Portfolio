import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-8 text-center font-mono text-xs text-dim">
      © {new Date().getFullYear()} {profile.name} — All rights reserved. 
    </footer>
  );
}
