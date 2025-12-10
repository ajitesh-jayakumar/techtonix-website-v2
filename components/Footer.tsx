export default function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-8 mt-auto backdrop-blur-sm">
      <div className="site-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">The Fenceless Patrol</h3>
            <p className="text-muted-foreground text-sm mt-1">Created by Team Techtonix (Grade 7)</p>
            <p className="text-muted-foreground text-sm">
              <a href="https://www.yuvabharathi.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Yuvabharathi Public School</a>, Coimbatore
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="/solution" className="text-muted-foreground hover:text-primary transition-colors">Solution</a>
            <a href="/technology" className="text-muted-foreground hover:text-primary transition-colors">Technology</a>
            <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</a>
            <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Team Techtonix. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with Passion <span className="text-primary">♥</span> • Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
