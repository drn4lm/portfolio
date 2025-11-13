import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div className="flex-1"></div>
      <p className="text-sm text-muted-foreground text-center flex-1">
        &copy; {new Date().getFullYear()} Darren Lam. All rights reserved.
      </p>
      <div className="flex-1 flex justify-end">
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};