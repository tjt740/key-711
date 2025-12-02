const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>&copy; 2025 GamsgoClone. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">隐私政策</a>
          <a href="#" className="hover:text-foreground transition-colors">服务条款</a>
          <a href="#" className="hover:text-foreground transition-colors">联系我们</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
